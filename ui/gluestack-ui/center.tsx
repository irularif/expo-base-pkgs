import * as components from '../../vendor/gluestack-ui/center';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { Center } = customComponents satisfies typeof customComponents;
