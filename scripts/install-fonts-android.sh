#!/bin/bash
# install-fonts-android - fonts installation script for React Native Android

set -euo pipefail  # Exit on error, undefined variables, and pipe failures

# Constants
readonly SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
readonly PROJECT_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"
readonly FONTS_SOURCE_DIR="${PROJECT_ROOT}/app/assets/fonts"
readonly ANDROID_RES_DIR="${PROJECT_ROOT}/android/app/src/main/res"
readonly ANDROID_FONTS_DIR="${ANDROID_RES_DIR}/font"
readonly FONT_EXTENSIONS="*.ttf *.otf"

# Logging functions
log_info() { echo "[INFO] $*"; }
log_warn() { echo "[WARN] $*" >&2; }
log_error() { echo "[ERROR] $*" >&2; }

log_info "Starting font installation process..."

# Validate prerequisites
if [[ ! -d "${FONTS_SOURCE_DIR}" ]]; then
    log_error "Font source directory ${FONTS_SOURCE_DIR} not found."
    exit 1
fi

# Clean and create fonts directory
if [[ -d "${ANDROID_FONTS_DIR}" ]]; then
    log_info "Removing existing ${ANDROID_FONTS_DIR} directory..."
    rm -rf "${ANDROID_FONTS_DIR}"
fi

mkdir -p "${ANDROID_FONTS_DIR}"
log_info "Created ${ANDROID_FONTS_DIR} directory"

# Utility functions
android_font_name() {
    local name="$1"
    printf '%s' "$name" | tr '[:upper:]' '[:lower:]' | tr ' -' '_' | sed 's/[^a-z0-9_]//g'
}

to_titlecase() {
    local str="${1//_/ }"  # Replace underscores with spaces
    local result="" word first_char rest
    
    for word in $str; do
        first_char="$(echo "${word:0:1}" | tr '[:lower:]' '[:upper:]')"
        rest="${word:1}"
        result="${result}${first_char}${rest} "
    done
    
    printf '%s' "${result% }"  # Remove trailing space
}

get_font_weight() {
    local font_name_lower="$1"
    
    # Check for weight patterns in font name (order matters - check longer patterns first)
    if [[ "$font_name_lower" =~ extralight ]]; then
        printf '200'
    elif [[ "$font_name_lower" =~ extrabold || "$font_name_lower" =~ extra_bold ]]; then
        printf '800'
    elif [[ "$font_name_lower" =~ semibold || "$font_name_lower" =~ semi_bold ]]; then
        printf '600'
    elif [[ "$font_name_lower" =~ thin ]]; then
        printf '100'
    elif [[ "$font_name_lower" =~ light ]]; then
        printf '300'
    elif [[ "$font_name_lower" =~ medium ]]; then
        printf '500'
    elif [[ "$font_name_lower" =~ bold ]]; then
        printf '700'
    elif [[ "$font_name_lower" =~ black || "$font_name_lower" =~ heavy ]]; then
        printf '900'
    elif [[ "$font_name_lower" =~ regular ]]; then
        printf '400'
    else
        printf '400'  # Default weight
    fi
}

get_font_style() {
    local font_name_lower="$1"
    [[ "$font_name_lower" =~ italic ]] && printf 'italic' || printf 'normal'
}

# Process font family directory
process_font_family() {
    local font_dir="$1"
    local font_family android_family xml_file
    
    font_family="$(basename "$font_dir")"
    android_family="$(android_font_name "$font_family")"
    
    # Get font files using a more compatible approach
    local font_files=()
    while IFS= read -r -d '' font_file; do
        font_files+=("$font_file")
    done < <(find "$font_dir" -type f \( -name "*.ttf" -o -name "*.otf" \) -print0 2>/dev/null)
    
    if [[ ${#font_files[@]} -eq 0 ]]; then
        return 0  # Skip empty directories
    fi
    
    log_info "Processing font family: ${font_family} (${android_family})"
    
    # Add to font families list
    font_families+=("$android_family")
    
    # Create XML font family file
    xml_file="${ANDROID_FONTS_DIR}/${android_family}.xml"
    cat > "$xml_file" << 'EOF'
<?xml version="1.0" encoding="utf-8"?>
<font-family xmlns:app="http://schemas.android.com/apk/res-auto">
EOF
    
    # Process each font file
    local font_file font_filename font_name extension android_name font_name_lower
    local font_style font_weight
    
    for font_file in "${font_files[@]}"; do
        font_filename="$(basename "$font_file")"
        font_name="${font_filename%.*}"
        extension="${font_filename##*.}"
        android_name="$(android_font_name "$font_name")"
        font_name_lower="$(echo "$font_name" | tr '[:upper:]' '[:lower:]')"  # Compatible lowercase conversion
        
        # Copy and rename the font file
        cp "$font_file" "${ANDROID_FONTS_DIR}/${android_name}.${extension}"
        log_info "  - Copied: ${font_filename} -> ${android_name}.${extension}"
        
        # Get font attributes
        font_style="$(get_font_style "$font_name_lower")"
        font_weight="$(get_font_weight "$font_name_lower")"
        
        # Add font to XML
        printf '    <font app:fontStyle="%s" app:fontWeight="%s" app:font="@font/%s" />\n' \
            "$font_style" "$font_weight" "$android_name" >> "$xml_file"
    done
    
    # Close the XML file
    echo "</font-family>" >> "$xml_file"
    log_info "  Created font family XML: ${android_family}.xml"
}

# Main font processing loop
declare -a font_families=()

# Get all font directories using a compatible approach
while IFS= read -r -d '' font_dir; do
    process_font_family "$font_dir"
done < <(find "${FONTS_SOURCE_DIR}" -mindepth 1 -type d -print0 2>/dev/null)

if [[ ${#font_families[@]} -eq 0 ]]; then
    log_warn "No font families found in ${FONTS_SOURCE_DIR}"
    # Continue to cleanup logic even if no fonts found
fi

# MainActivity.kt modification functions
find_main_activity() {
    find "${PROJECT_ROOT}/android/app/src/main" -name "MainActivity.kt" -type f 2>/dev/null | head -1
}

is_darwin() {
    [[ "$OSTYPE" == "darwin"* ]]
}

sed_inplace() {
    local pattern="$1"
    local file="$2"
    
    if is_darwin; then
        sed -i '' "$pattern" "$file"
    else
        sed -i "$pattern" "$file"
    fi
}

# Enhanced sed function for adding lines with proper formatting
sed_add_line() {
    local line_pattern="$1"
    local content="$2"
    local file="$3"
    
    if is_darwin; then
        # macOS sed requires different escaping for newlines
        sed -i '' "/${line_pattern}/a\\
${content}
" "$file"
    else
        # GNU sed
        sed -i "/${line_pattern}/a\\
${content}" "$file"
    fi
}

add_import_to_mainactivity() {
    local main_activity_path="$1"
    local import_statement="import com.facebook.react.common.assets.ReactFontManager"
    
    if grep -q "$import_statement" "$main_activity_path"; then
        return 0  # Already exists
    fi
    
    log_info "Adding import for ReactFontManager"
    
    # Try to add after last import
    local last_import_line
    last_import_line="$(grep -n "^import " "$main_activity_path" | tail -1 | cut -d: -f1)"
    
    if [[ -n "$last_import_line" ]]; then
        # Add after the specific line number of the last import
        if is_darwin; then
            sed -i '' "${last_import_line}a\\
$import_statement
" "$main_activity_path"
        else
            sed -i "${last_import_line}a\\
$import_statement" "$main_activity_path"
        fi
        log_info "Added ReactFontManager import after line ${last_import_line}"
        return 0
    fi
    
    # Fallback: add after package declaration
    local package_line
    package_line="$(grep -n "^package " "$main_activity_path" | head -1 | cut -d: -f1)"
    
    if [[ -n "$package_line" ]]; then
        if is_darwin; then
            sed -i '' "${package_line}a\\
\\
$import_statement
" "$main_activity_path"
        else
            sed -i "${package_line}a\\
\\
$import_statement" "$main_activity_path"
        fi
        log_info "Added ReactFontManager import after package declaration"
        return 0
    fi
    
    log_error "Could not find package declaration in MainActivity.kt"
    return 1
}

add_font_registration() {
    local main_activity_path="$1"
    local family="$2"
    local font_name_to_use registration_code
    
    font_name_to_use="$(to_titlecase "$family")"
    registration_code="    ReactFontManager.getInstance().addCustomFont(this, \"${font_name_to_use}\", R.font.${family});"
    
    # Check if already registered
    if grep -q "ReactFontManager.getInstance().addCustomFont(this, \"${font_name_to_use}\", R.font.${family})" "$main_activity_path"; then
        log_info "Registration for ${font_name_to_use} already exists"
        return 0
    fi
    
    log_info "Adding registration for ${font_name_to_use}"
    
    if grep -q "super.onCreate" "$main_activity_path"; then
        # Add after super.onCreate line using specific line number
        local oncreate_line
        oncreate_line="$(grep -n "super.onCreate" "$main_activity_path" | head -1 | cut -d: -f1)"
        
        if is_darwin; then
            sed -i '' "${oncreate_line}a\\
$registration_code
" "$main_activity_path"
        else
            sed -i "${oncreate_line}a\\
$registration_code" "$main_activity_path"
        fi
        log_info "Added font registration after super.onCreate"
    else
        log_warn "super.onCreate not found, skipping font registration for ${font_name_to_use}"
        return 1
    fi
}

# Function to remove font registration from MainActivity.kt
remove_font_registration() {
    local main_activity_path="$1"
    local family="$2"
    local font_name_to_use
    
    font_name_to_use="$(to_titlecase "$family")"
    
    # Check if registration exists
    if grep -q "ReactFontManager.getInstance().addCustomFont(this, \"${font_name_to_use}\", R.font.${family})" "$main_activity_path"; then
        log_info "Removing registration for ${font_name_to_use}"
        
        # Remove the font registration line
        if is_darwin; then
            sed -i '' "/ReactFontManager\.getInstance()\.addCustomFont(this, \"${font_name_to_use}\", R\.font\.${family});/d" "$main_activity_path"
        else
            sed -i "/ReactFontManager\.getInstance()\.addCustomFont(this, \"${font_name_to_use}\", R\.font\.${family});/d" "$main_activity_path"
        fi
        log_info "Removed font registration for ${font_name_to_use}"
        return 0
    fi
    
    return 1
}

# Function to check if any font registrations exist
has_font_registrations() {
    local main_activity_path="$1"
    grep -q "ReactFontManager.getInstance().addCustomFont" "$main_activity_path"
}

# Function to remove ReactFontManager import if no registrations exist
cleanup_import_if_unused() {
    local main_activity_path="$1"
    
    if ! has_font_registrations "$main_activity_path"; then
        if grep -q "import com.facebook.react.common.assets.ReactFontManager" "$main_activity_path"; then
            log_info "No font registrations found, removing ReactFontManager import"
            
            if is_darwin; then
                sed -i '' "/import com\.facebook\.react\.common\.assets\.ReactFontManager/d" "$main_activity_path"
            else
                sed -i "/import com\.facebook\.react\.common\.assets\.ReactFontManager/d" "$main_activity_path"
            fi
            log_info "Removed unused ReactFontManager import"
        fi
    fi
}

# Function to get existing font registrations from MainActivity.kt
get_existing_font_registrations() {
    local main_activity_path="$1"
    local existing_fonts=()
    
    # Extract font family names from existing registrations
    while IFS= read -r line; do
        if [[ "$line" =~ ReactFontManager.*addCustomFont.*R\.font\.([a-zA-Z_0-9]+) ]]; then
            # Extract the font resource name
            local font_name="${BASH_REMATCH[1]}"
            existing_fonts+=("$font_name")
        fi
    done < <(grep "ReactFontManager.getInstance().addCustomFont" "$main_activity_path" 2>/dev/null || true)
    
    # Only print if we have fonts
    if [[ ${#existing_fonts[@]} -gt 0 ]]; then
        printf '%s\n' "${existing_fonts[@]}"
    fi
}

# Process MainActivity.kt modifications
main_activity_path="$(find_main_activity)"

if [[ -z "$main_activity_path" ]]; then
    log_warn "MainActivity.kt not found. This might be an Expo project or the file structure is different."
    log_info "Font files have been copied to Android resources."
    exit 0
fi

log_info "Found MainActivity.kt at ${main_activity_path}"

# Get existing font registrations before making changes
declare -a existing_registrations=()
while IFS= read -r font_name; do
    if [[ -n "$font_name" ]]; then
        existing_registrations+=("$font_name")
    fi
done < <(get_existing_font_registrations "$main_activity_path")

# Create arrays for comparison
declare -a current_families_array
if [[ ${#font_families[@]} -gt 0 ]]; then
    current_families_array=("${font_families[@]}")
fi
declare -a removed_fonts=()

# Find fonts that were registered but are no longer in source
if [[ ${#existing_registrations[@]} -gt 0 ]]; then
    for existing_font in "${existing_registrations[@]}"; do
        if [[ -n "$existing_font" ]]; then
            found=false
            # Only check current fonts if we have any
            if [[ ${#current_families_array[@]} -gt 0 ]]; then
                for current_font in "${current_families_array[@]}"; do
                    if [[ "$existing_font" == "$current_font" ]]; then
                        found=true
                        break
                    fi
                done
            fi
            
            if [[ "$found" == false ]]; then
                removed_fonts+=("$existing_font")
            fi
        fi
    done
fi

# Remove registrations for fonts that no longer exist
if [[ ${#removed_fonts[@]} -gt 0 ]]; then
    log_info "Found ${#removed_fonts[@]} font(s) to remove from MainActivity.kt"
    for removed_font in "${removed_fonts[@]}"; do
        remove_font_registration "$main_activity_path" "$removed_font"
    done
fi

# Add import and font registrations for current fonts
if [[ ${#font_families[@]} -gt 0 ]]; then
    if add_import_to_mainactivity "$main_activity_path"; then
        for family in "${font_families[@]}"; do
            add_font_registration "$main_activity_path" "$family"
        done
    fi
fi

# Clean up import if no fonts are registered
cleanup_import_if_unused "$main_activity_path"

if [[ ${#font_families[@]} -gt 0 ]]; then
    log_info "Fonts installed successfully. Processed ${#font_families[@]} font families."
else
    log_info "Font cleanup completed. No font families found in source directory."
fi