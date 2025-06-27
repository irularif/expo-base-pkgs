import * as components from '../../vendor/gluestack-ui/alert-dialog';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const {
  AlertDialog,
  AlertDialogContent,
  AlertDialogCloseButton,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
} = customComponents satisfies typeof customComponents;
