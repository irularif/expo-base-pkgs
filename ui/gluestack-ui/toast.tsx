import * as components from '../../vendor/gluestack-ui/toast';
import { groupWithComponentImport } from '../../hoc/customComponent';

const { useToast, ...componentOnlyExports } = components;
const customComponents = groupWithComponentImport(componentOnlyExports);

export const { Toast, ToastTitle, ToastDescription } =
  customComponents satisfies typeof customComponents;
