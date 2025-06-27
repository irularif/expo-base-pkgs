import * as components from '../../vendor/gluestack-ui/divider';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Divider } = customComponents;
