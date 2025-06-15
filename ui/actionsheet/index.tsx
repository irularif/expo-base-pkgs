import * as components from '../../vendor/gluestack-ui/actionsheet';
import { groupWithComponentImport } from '../../hoc/customCmponent';

components.ActionsheetItemText.displayName = 'ActionsheetItemText';
components.ActionsheetSectionHeaderText.displayName =
  'ActionsheetSectionHeaderText';

const customComponents = groupWithComponentImport('actionSheet', components);

export const Actionsheet = customComponents.Actionsheet;
export const ActionsheetContent = customComponents.ActionsheetContent;
export const ActionsheetItem = customComponents.ActionsheetItem;
export const ActionsheetItemText = customComponents.ActionsheetItemText;
export const ActionsheetDragIndicator =
  customComponents.ActionsheetDragIndicator;
export const ActionsheetDragIndicatorWrapper =
  customComponents.ActionsheetDragIndicatorWrapper;
export const ActionsheetBackdrop = customComponents.ActionsheetBackdrop;
export const ActionsheetScrollView = customComponents.ActionsheetScrollView;
export const ActionsheetVirtualizedList =
  customComponents.ActionsheetVirtualizedList;
export const ActionsheetFlatList = customComponents.ActionsheetFlatList;
export const ActionsheetSectionList = customComponents.ActionsheetSectionList;
export const ActionsheetSectionHeaderText =
  customComponents.ActionsheetSectionHeaderText;
export const ActionsheetIcon = customComponents.ActionsheetIcon;
