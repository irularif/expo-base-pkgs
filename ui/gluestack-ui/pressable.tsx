import * as components from '../../vendor/gluestack-ui/pressable';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Pressable } = customComponents satisfies typeof customComponents;
