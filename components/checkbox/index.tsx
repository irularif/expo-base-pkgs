import * as components from '../../vendor/gluestack-ui/checkbox';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('checkbox', components);

export const Checkbox = customComponents.Checkbox;
export const CheckboxIndicator = customComponents.CheckboxIndicator;
export const CheckboxLabel = customComponents.CheckboxLabel;
export const CheckboxIcon = customComponents.CheckboxIcon;
export const CheckboxGroup = customComponents.CheckboxGroup;
