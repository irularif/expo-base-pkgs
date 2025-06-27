import { ComponentProps } from 'react';

// Type helper for cleaner component prop extraction
type GluestackProps<T> = ComponentProps<T>;

// Import module aliases for better performance and maintainability
type AccordionModule = typeof import('../vendor/gluestack-ui/accordion');
type ActionsheetModule = typeof import('../vendor/gluestack-ui/actionsheet');
type AlertModule = typeof import('../vendor/gluestack-ui/alert');
type AlertDialogModule = typeof import('../vendor/gluestack-ui/alert-dialog');
type AvatarModule = typeof import('../vendor/gluestack-ui/avatar');
type BadgeModule = typeof import('../vendor/gluestack-ui/badge');
type BoxModule = typeof import('../vendor/gluestack-ui/box');
type ButtonModule = typeof import('../vendor/gluestack-ui/button');
type CardModule = typeof import('../vendor/gluestack-ui/card');
type CenterModule = typeof import('../vendor/gluestack-ui/center');
type CheckboxModule = typeof import('../vendor/gluestack-ui/checkbox');
type DividerModule = typeof import('../vendor/gluestack-ui/divider');
type DrawerModule = typeof import('../vendor/gluestack-ui/drawer');
type FabModule = typeof import('../vendor/gluestack-ui/fab');
type FormControlModule = typeof import('../vendor/gluestack-ui/form-control');
type GridModule = typeof import('../vendor/gluestack-ui/grid');
type HeadingModule = typeof import('../vendor/gluestack-ui/heading');
type HStackModule = typeof import('../vendor/gluestack-ui/hstack');
type IconModule = typeof import('../vendor/gluestack-ui/icon');
type ImageModule = typeof import('../vendor/gluestack-ui/image');
type ImageBackgroundModule =
  typeof import('../vendor/gluestack-ui/image-background');
type InputModule = typeof import('../vendor/gluestack-ui/input');
type LinkModule = typeof import('../vendor/gluestack-ui/link');
type MenuModule = typeof import('../vendor/gluestack-ui/menu');
type ModalModule = typeof import('../vendor/gluestack-ui/modal');
type PopoverModule = typeof import('../vendor/gluestack-ui/popover');
type PortalModule = typeof import('../vendor/gluestack-ui/portal');
type PressableModule = typeof import('../vendor/gluestack-ui/pressable');
type ProgressModule = typeof import('../vendor/gluestack-ui/progress');
type RadioModule = typeof import('../vendor/gluestack-ui/radio');
type SelectModule = typeof import('../vendor/gluestack-ui/select');
type SkeletonModule = typeof import('../vendor/gluestack-ui/skeleton');
type SliderModule = typeof import('../vendor/gluestack-ui/slider');
type SpinnerModule = typeof import('../vendor/gluestack-ui/spinner');
type SwitchModule = typeof import('../vendor/gluestack-ui/switch');
type TableModule = typeof import('../vendor/gluestack-ui/table');
type TextModule = typeof import('../vendor/gluestack-ui/text');
type TextareaModule = typeof import('../vendor/gluestack-ui/textarea');
type ToastModule = typeof import('../vendor/gluestack-ui/toast');
type TooltipModule = typeof import('../vendor/gluestack-ui/tooltip');
type VStackModule = typeof import('../vendor/gluestack-ui/vstack');

export type TGluestackUI = {
  // === ACCORDION COMPONENTS ===
  /** Accordion wrapper component */
  Accordion: AccordionModule['Accordion'];
  /** Individual accordion item */
  AccordionItem: AccordionModule['AccordionItem'];
  /** Accordion header container */
  AccordionHeader: AccordionModule['AccordionHeader'];
  /** Accordion trigger button */
  AccordionTrigger: AccordionModule['AccordionTrigger'];
  /** Accordion title text */
  AccordionTitleText: AccordionModule['AccordionTitleText'];
  /** Accordion content text */
  AccordionContentText: AccordionModule['AccordionContentText'];
  /** Accordion icon */
  AccordionIcon: AccordionModule['AccordionIcon'];
  /** Accordion content container */
  AccordionContent: AccordionModule['AccordionContent'];

  // === ACTIONSHEET COMPONENTS ===
  /** Bottom action sheet container */
  Actionsheet: ActionsheetModule['Actionsheet'];
  /** Action sheet content area */
  ActionsheetContent: ActionsheetModule['ActionsheetContent'];
  /** Individual action sheet item */
  ActionsheetItem: ActionsheetModule['ActionsheetItem'];
  /** Action sheet item text */
  ActionsheetItemText: ActionsheetModule['ActionsheetItemText'];
  /** Drag indicator handle */
  ActionsheetDragIndicator: ActionsheetModule['ActionsheetDragIndicator'];
  /** Drag indicator wrapper */
  ActionsheetDragIndicatorWrapper: ActionsheetModule['ActionsheetDragIndicatorWrapper'];
  /** Action sheet backdrop overlay */
  ActionsheetBackdrop: ActionsheetModule['ActionsheetBackdrop'];
  /** Scrollable action sheet content */
  ActionsheetScrollView: ActionsheetModule['ActionsheetScrollView'];
  /** Virtualized list for action sheet */
  ActionsheetVirtualizedList: ActionsheetModule['ActionsheetVirtualizedList'];
  /** Flat list for action sheet */
  ActionsheetFlatList: ActionsheetModule['ActionsheetFlatList'];
  /** Section list for action sheet */
  ActionsheetSectionList: ActionsheetModule['ActionsheetSectionList'];
  /** Section header text for action sheet */
  ActionsheetSectionHeaderText: ActionsheetModule['ActionsheetSectionHeaderText'];
  /** Action sheet icon */
  ActionsheetIcon: ActionsheetModule['ActionsheetIcon'];

  // === ALERT COMPONENTS ===
  Alert: AlertModule['Alert'];
  AlertText: AlertModule['AlertText'];
  AlertIcon: AlertModule['AlertIcon'];

  // === ALERT DIALOG COMPONENTS ===
  AlertDialog: AlertDialogModule['AlertDialog'];
  AlertDialogContent: AlertDialogModule['AlertDialogContent'];
  AlertDialogCloseButton: AlertDialogModule['AlertDialogCloseButton'];
  AlertDialogHeader: AlertDialogModule['AlertDialogHeader'];
  AlertDialogFooter: AlertDialogModule['AlertDialogFooter'];
  AlertDialogBody: AlertDialogModule['AlertDialogBody'];
  AlertDialogBackdrop: AlertDialogModule['AlertDialogBackdrop'];

  // === AVATAR COMPONENTS ===
  Avatar: AvatarModule['Avatar'];
  AvatarBadge: AvatarModule['AvatarBadge'];
  AvatarFallbackText: AvatarModule['AvatarFallbackText'];
  AvatarImage: AvatarModule['AvatarImage'];
  AvatarGroup: AvatarModule['AvatarGroup'];

  // === BADGE COMPONENTS ===
  Badge: BadgeModule['Badge'];
  BadgeIcon: BadgeModule['BadgeIcon'];
  BadgeText: BadgeModule['BadgeText'];

  // === BOX COMPONENTS ===
  Box: BoxModule['Box'];

  // === BUTTON COMPONENTS ===
  Button: ButtonModule['Button'];
  ButtonText: ButtonModule['ButtonText'];
  ButtonSpinner: ButtonModule['ButtonSpinner'];
  ButtonIcon: ButtonModule['ButtonIcon'];
  ButtonGroup: ButtonModule['ButtonGroup'];

  // === CARD COMPONENTS ===
  Card: CardModule['Card'];

  // === CENTER COMPONENTS ===
  Center: CenterModule['Center'];

  // === CHECKBOX COMPONENTS ===
  Checkbox: CheckboxModule['Checkbox'];
  CheckboxIndicator: CheckboxModule['CheckboxIndicator'];
  CheckboxLabel: CheckboxModule['CheckboxLabel'];
  CheckboxIcon: CheckboxModule['CheckboxIcon'];
  CheckboxGroup: CheckboxModule['CheckboxGroup'];

  // === DIVIDER COMPONENTS ===
  Divider: DividerModule['Divider'];

  // === DRAWER COMPONENTS ===
  Drawer: DrawerModule['Drawer'];
  DrawerBackdrop: DrawerModule['DrawerBackdrop'];
  DrawerContent: DrawerModule['DrawerContent'];
  DrawerCloseButton: DrawerModule['DrawerCloseButton'];
  DrawerHeader: DrawerModule['DrawerHeader'];
  DrawerBody: DrawerModule['DrawerBody'];
  DrawerFooter: DrawerModule['DrawerFooter'];

  // === FAB COMPONENTS ===
  Fab: FabModule['Fab'];
  FabLabel: FabModule['FabLabel'];
  FabIcon: FabModule['FabIcon'];

  // === FORM CONTROL COMPONENTS ===
  FormControl: FormControlModule['FormControl'];
  FormControlError: FormControlModule['FormControlError'];
  FormControlErrorText: FormControlModule['FormControlErrorText'];
  FormControlErrorIcon: FormControlModule['FormControlErrorIcon'];
  FormControlLabel: FormControlModule['FormControlLabel'];
  FormControlLabelText: FormControlModule['FormControlLabelText'];
  FormControlLabelAstrick: FormControlModule['FormControlLabelAstrick'];
  FormControlHelper: FormControlModule['FormControlHelper'];
  FormControlHelperText: FormControlModule['FormControlHelperText'];

  // === GRID COMPONENTS ===
  Grid: GridModule['Grid'];
  GridItem: GridModule['GridItem'];

  // === HEADING COMPONENTS ===
  Heading: HeadingModule['Heading'];

  // === HSTACK COMPONENTS ===
  HStack: HStackModule['HStack'];

  // === ICON COMPONENTS ===
  Icon: IconModule['Icon'];

  // === IMAGE COMPONENTS ===
  Image: ImageModule['Image'];

  // === IMAGE BACKGROUND COMPONENTS ===
  ImageBackground: ImageBackgroundModule['ImageBackground'];

  // === INPUT COMPONENTS ===
  Input: InputModule['Input'];
  InputField: InputModule['InputField'];
  InputIcon: InputModule['InputIcon'];
  InputSlot: InputModule['InputSlot'];

  // === LINK COMPONENTS ===
  Link: LinkModule['Link'];
  LinkText: LinkModule['LinkText'];

  // === MENU COMPONENTS ===
  Menu: MenuModule['Menu'];
  MenuItem: MenuModule['MenuItem'];
  MenuItemLabel: MenuModule['MenuItemLabel'];
  MenuSeparator: MenuModule['MenuSeparator'];

  // === MODAL COMPONENTS ===
  Modal: ModalModule['Modal'];
  ModalBackdrop: ModalModule['ModalBackdrop'];
  ModalContent: ModalModule['ModalContent'];
  ModalCloseButton: ModalModule['ModalCloseButton'];
  ModalHeader: ModalModule['ModalHeader'];
  ModalBody: ModalModule['ModalBody'];
  ModalFooter: ModalModule['ModalFooter'];

  // === POPOVER COMPONENTS ===
  Popover: PopoverModule['Popover'];
  PopoverBackdrop: PopoverModule['PopoverBackdrop'];
  PopoverArrow: PopoverModule['PopoverArrow'];
  PopoverCloseButton: PopoverModule['PopoverCloseButton'];
  PopoverFooter: PopoverModule['PopoverFooter'];
  PopoverHeader: PopoverModule['PopoverHeader'];
  PopoverBody: PopoverModule['PopoverBody'];
  PopoverContent: PopoverModule['PopoverContent'];

  // === PORTAL COMPONENTS ===
  Portal: PortalModule['Portal'];

  // === PRESSABLE COMPONENTS ===
  Pressable: PressableModule['Pressable'];

  // === PROGRESS COMPONENTS ===
  Progress: ProgressModule['Progress'];
  ProgressFilledTrack: ProgressModule['ProgressFilledTrack'];

  // === RADIO COMPONENTS ===
  Radio: RadioModule['Radio'];
  RadioGroup: RadioModule['RadioGroup'];
  RadioIndicator: RadioModule['RadioIndicator'];
  RadioLabel: RadioModule['RadioLabel'];
  RadioIcon: RadioModule['RadioIcon'];

  // === SELECT COMPONENTS ===
  Select: SelectModule['Select'];
  SelectTrigger: SelectModule['SelectTrigger'];
  SelectInput: SelectModule['SelectInput'];
  SelectIcon: SelectModule['SelectIcon'];
  SelectPortal: SelectModule['SelectPortal'];
  SelectBackdrop: SelectModule['SelectBackdrop'];
  SelectContent: SelectModule['SelectContent'];
  SelectDragIndicator: SelectModule['SelectDragIndicator'];
  SelectDragIndicatorWrapper: SelectModule['SelectDragIndicatorWrapper'];
  SelectItem: SelectModule['SelectItem'];
  SelectScrollView: SelectModule['SelectScrollView'];
  SelectVirtualizedList: SelectModule['SelectVirtualizedList'];
  SelectFlatList: SelectModule['SelectFlatList'];
  SelectSectionList: SelectModule['SelectSectionList'];
  SelectSectionHeaderText: SelectModule['SelectSectionHeaderText'];

  // === SKELETON COMPONENTS ===
  Skeleton: SkeletonModule['Skeleton'];
  SkeletonText: SkeletonModule['SkeletonText'];

  // === SLIDER COMPONENTS ===
  Slider: SliderModule['Slider'];
  SliderThumb: SliderModule['SliderThumb'];
  SliderTrack: SliderModule['SliderTrack'];
  SliderFilledTrack: SliderModule['SliderFilledTrack'];

  // === SPINNER COMPONENTS ===
  Spinner: SpinnerModule['Spinner'];

  // === SWITCH COMPONENTS ===
  Switch: SwitchModule['Switch'];

  // === TABLE COMPONENTS ===
  Table: TableModule['Table'];
  TableHeader: TableModule['TableHeader'];
  TableBody: TableModule['TableBody'];
  TableFooter: TableModule['TableFooter'];
  TableHead: TableModule['TableHead'];
  TableRow: TableModule['TableRow'];
  TableData: TableModule['TableData'];
  TableCaption: TableModule['TableCaption'];

  // === TEXT COMPONENTS ===
  /**
   * Primary text component with full type safety for className and all props.
   * Supports styling via className, size variants, and accessibility features.
   */
  Text: TextModule['Text'];

  // === TEXTAREA COMPONENTS ===
  Textarea: TextareaModule['Textarea'];
  TextareaInput: TextareaModule['TextareaInput'];

  // === TOAST COMPONENTS ===
  Toast: ToastModule['Toast'];
  ToastTitle: ToastModule['ToastTitle'];
  ToastDescription: ToastModule['ToastDescription'];

  // === TOOLTIP COMPONENTS ===
  Tooltip: TooltipModule['Tooltip'];
  TooltipContent: TooltipModule['TooltipContent'];
  TooltipText: TooltipModule['TooltipText'];

  // === VSTACK COMPONENTS ===
  VStack: VStackModule['VStack'];
};

/**
 * Utility types for enhanced type safety and developer experience
 */

export type TGluestackUIProps = {
  [K in keyof TGluestackUI]: GluestackProps<TGluestackUI[K]>;
};

/** Extract component type from TGluestackUI */
export type GluestackComponent<K extends keyof TGluestackUI> = TGluestackUI[K];

/** Extract component props from TGluestackUIProps */
export type GluestackComponentProps<K extends keyof TGluestackUI> =
  TGluestackUI[K];

/** Extract props from component using ComponentProps */
export type GluestackPropsFromComponent<K extends keyof TGluestackUI> =
  ComponentProps<TGluestackUI[K]>;

/** Union type of all available component names */
export type GluestackComponentNames = keyof TGluestackUI;

/**
 * Helper type to ensure type safety when using className
 * This maintains compatibility with styling systems like Tailwind, NativeWind, etc.
 */
export type GluestackStyledComponent<K extends keyof TGluestackUI> =
  TGluestackUI[K] & {
    className?: string;
  };

/**
 * Type-safe component picker utility
 * Example: const TextComponent = pickGluestackComponent('Text');
 */
export type PickGluestackComponent<K extends GluestackComponentNames> =
  TGluestackUI[K];

/**
 * Type-safe props picker utility
 * Example: type TextProps = PickGluestackProps<'Text'>;
 */
export type PickGluestackProps<K extends GluestackComponentNames> =
  TGluestackUI[K];

/**
 * Advanced utility types for enhanced type safety
 */

/** Create conditional props based on variant */
export type GluestackVariantProps<
  K extends GluestackComponentNames,
  V extends string = string,
> = TGluestackUI[K] & {
  variant?: V;
};

/** Props with required className for styled components */
export type GluestackStyledProps<K extends GluestackComponentNames> =
  TGluestackUI[K] & {
    className: string;
  };

/** Optional className props for flexible styling */
export type GluestackOptionalStyledProps<K extends GluestackComponentNames> =
  TGluestackUI[K] & {
    className?: string;
  };
