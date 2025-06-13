import * as components from '../../vendor/gluestack-ui/alert';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('alert', components);

export const Alert = customComponents.Alert;
export const AlertText = customComponents.AlertText;
export const AlertIcon = customComponents.AlertIcon;
