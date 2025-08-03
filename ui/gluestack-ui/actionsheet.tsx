import { groupWithComponentImport } from '../../hoc/customComponent';
import * as actionsheet from '../../vendor/gluestack-ui/actionsheet';

// Set display names
actionsheet.ActionsheetItemText.displayName = 'ActionsheetItemText';
actionsheet.ActionsheetSectionHeaderText.displayName =
  'ActionsheetSectionHeaderText';

// Type-safe component grouping
const actionsheetComponents = groupWithComponentImport(actionsheet);

export const {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
  ActionsheetScrollView,
  ActionsheetVirtualizedList,
  ActionsheetFlatList,
  ActionsheetSectionList,
  ActionsheetSectionHeaderText,
  ActionsheetIcon,
} = actionsheetComponents satisfies typeof actionsheetComponents;
