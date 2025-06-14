import * as components from '../../vendor/gluestack-ui/toast';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const { useToast, ...componentOnlyExports } = components;
const customComponents = groupWithComponentImport(
  'toast',
  componentOnlyExports
);

export const Toast = customComponents.Toast;
export const ToastTitle = customComponents.ToastTitle;
export const ToastDescription = customComponents.ToastDescription;
