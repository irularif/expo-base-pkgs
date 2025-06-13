import * as components from '../../vendor/gluestack-ui/divider';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('divider', components);

export const Divider = customComponents.Divider;
