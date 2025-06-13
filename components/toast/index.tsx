import * as components from '../../vendor/gluestack-ui/toast';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('toast', components);

export const Toast = customComponents.Toast;
export const ToastTitle = customComponents.ToastTitle;
export const ToastDescription = customComponents.ToastDescription;
