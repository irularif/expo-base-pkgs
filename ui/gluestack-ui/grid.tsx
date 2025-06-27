import * as components from '../../vendor/gluestack-ui/grid';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Grid, GridItem } =
  customComponents satisfies typeof customComponents;
