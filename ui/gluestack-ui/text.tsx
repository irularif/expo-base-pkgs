import * as components from '../../vendor/gluestack-ui/text';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { Text } = customComponents satisfies typeof customComponents;
