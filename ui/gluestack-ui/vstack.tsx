import * as components from '../../vendor/gluestack-ui/vstack';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { VStack } = customComponents satisfies typeof customComponents;
