import * as components from '../../vendor/gluestack-ui/hstack';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { HStack } = customComponents satisfies typeof customComponents;
