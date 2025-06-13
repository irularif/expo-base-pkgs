import * as components from '../../vendor/gluestack-ui/flat-list';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('flatList', components);

export const FlatList = customComponents.FlatList;
