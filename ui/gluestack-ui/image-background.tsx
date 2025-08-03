import * as components from '../../vendor/gluestack-ui/image-background';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { ImageBackground } =
  customComponents satisfies typeof customComponents;
