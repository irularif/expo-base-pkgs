import * as components from '../../vendor/gluestack-ui/checkbox';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckboxGroup,
} = customComponents satisfies typeof customComponents;
