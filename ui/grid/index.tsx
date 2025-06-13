import * as components from '../../vendor/gluestack-ui/grid';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('grid', components);

export const Grid = customComponents.Grid;
export const GridItem = customComponents.GridItem;
