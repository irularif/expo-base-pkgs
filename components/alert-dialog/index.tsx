import * as components from '../../vendor/gluestack-ui/alert-dialog';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('alertDialog', components);

export const AlertDialog = customComponents.AlertDialog;
export const AlertDialogContent = customComponents.AlertDialogContent;
export const AlertDialogCloseButton = customComponents.AlertDialogCloseButton;
export const AlertDialogHeader = customComponents.AlertDialogHeader;
export const AlertDialogFooter = customComponents.AlertDialogFooter;
export const AlertDialogBody = customComponents.AlertDialogBody;
export const AlertDialogBackdrop = customComponents.AlertDialogBackdrop;
