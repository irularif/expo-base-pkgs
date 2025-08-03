import * as components from '../../vendor/gluestack-ui/vstack';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { VStack } = customComponents satisfies typeof customComponents;
