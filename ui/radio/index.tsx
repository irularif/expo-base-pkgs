import * as components from '../../vendor/gluestack-ui/radio';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('radio', components);

export const Radio = customComponents.Radio;
export const RadioGroup = customComponents.RadioGroup;
export const RadioIndicator = customComponents.RadioIndicator;
export const RadioLabel = customComponents.RadioLabel;
export const RadioIcon = customComponents.RadioIcon;
