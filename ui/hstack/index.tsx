import * as components from '../../vendor/gluestack-ui/hstack';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('hstack', components);

export const HStack = customComponents.HStack;
