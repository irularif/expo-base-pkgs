import * as components from '../../vendor/gluestack-ui/vstack';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('vstack', components);

export const VStack = customComponents.VStack;
