import * as components from '../../vendor/gluestack-ui/menu';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { Menu, MenuItem, MenuItemLabel, MenuSeparator } =
  customComponents satisfies typeof customComponents;
