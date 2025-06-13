import * as components from '../../vendor/gluestack-ui/drawer';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('drawer', components);

export const Drawer = customComponents.Drawer;
export const DrawerBackdrop = customComponents.DrawerBackdrop;
export const DrawerContent = customComponents.DrawerContent;
export const DrawerCloseButton = customComponents.DrawerCloseButton;
export const DrawerHeader = customComponents.DrawerHeader;
export const DrawerBody = customComponents.DrawerBody;
export const DrawerFooter = customComponents.DrawerFooter;
