import * as components from '../../vendor/gluestack-ui/pressable';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('pressable', components);

export const Pressable = customComponents.Pressable;
