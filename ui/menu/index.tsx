import * as components from '../../vendor/gluestack-ui/menu';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('menu', components);

export const Menu = customComponents.Menu;
export const MenuItem = customComponents.MenuItem;
export const MenuItemLabel = customComponents.MenuItemLabel;
export const MenuSeparator = customComponents.MenuSeparator;
