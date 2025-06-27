import * as components from '../../vendor/gluestack-ui/fab';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Fab, FabLabel, FabIcon } =
  customComponents satisfies typeof customComponents;
