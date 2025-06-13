import * as components from '../../vendor/gluestack-ui/box';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('box', components);

export const Box = customComponents.Box;
