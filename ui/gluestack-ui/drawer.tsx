import * as components from '../../vendor/gluestack-ui/drawer';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} = customComponents satisfies typeof customComponents;
