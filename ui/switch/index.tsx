import * as components from '../../vendor/gluestack-ui/switch';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('switch', components);

export const Switch = customComponents.Switch;
