import * as components from '../../vendor/gluestack-ui/center';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('center', components);

export const Center = customComponents.Center;
