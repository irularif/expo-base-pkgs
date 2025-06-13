import * as components from '../../vendor/gluestack-ui/select';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('select', components);

export const Select = customComponents.Select;
export const SelectTrigger = customComponents.SelectTrigger;
export const SelectInput = customComponents.SelectInput;
export const SelectIcon = customComponents.SelectIcon;
export const SelectPortal = customComponents.SelectPortal;
export const SelectBackdrop = customComponents.SelectBackdrop;
export const SelectContent = customComponents.SelectContent;
export const SelectDragIndicator = customComponents.SelectDragIndicator;
export const SelectDragIndicatorWrapper =
  customComponents.SelectDragIndicatorWrapper;
export const SelectItem = customComponents.SelectItem;
export const SelectScrollView = customComponents.SelectScrollView;
export const SelectVirtualizedList = customComponents.SelectVirtualizedList;
export const SelectFlatList = customComponents.SelectFlatList;
export const SelectSectionList = customComponents.SelectSectionList;
export const SelectSectionHeaderText = customComponents.SelectSectionHeaderText;
