import * as components from '../../vendor/gluestack-ui/image';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);
export const { Image } = customComponents satisfies typeof customComponents;
