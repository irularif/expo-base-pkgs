import * as components from '../../vendor/gluestack-ui/select';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectFlatList,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectScrollView,
  SelectSectionHeaderText,
  SelectSectionList,
  SelectTrigger,
  SelectVirtualizedList,
} = customComponents satisfies typeof customComponents;
