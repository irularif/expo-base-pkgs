import * as components from '../../vendor/gluestack-ui/divider';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { Divider } = customComponents;
