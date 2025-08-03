import * as components from '../../vendor/gluestack-ui/heading';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { Heading } = customComponents satisfies typeof customComponents;
