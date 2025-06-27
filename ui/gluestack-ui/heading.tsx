import * as components from '../../vendor/gluestack-ui/heading';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Heading } = customComponents satisfies typeof customComponents;
