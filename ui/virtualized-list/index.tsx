import * as components from '../../vendor/gluestack-ui/virtualized-list';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(
  'virtualizedList',
  components
);

export const VirtualizedList = customComponents.VirtualizedList;
