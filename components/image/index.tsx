import * as components from '../../vendor/gluestack-ui/image';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('image', components);
export const Image = customComponents.Image;
