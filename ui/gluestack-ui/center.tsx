import * as components from '../../vendor/gluestack-ui/center';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Center } = customComponents satisfies typeof customComponents;
