import * as components from '../../vendor/gluestack-ui/image-background';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(
  'imageBackground',
  components
);

export const ImageBackground = customComponents.ImageBackground;
