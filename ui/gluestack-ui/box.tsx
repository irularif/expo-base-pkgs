import * as components from '../../vendor/gluestack-ui/box';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Box } = customComponents satisfies typeof customComponents;
