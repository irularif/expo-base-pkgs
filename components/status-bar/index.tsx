import * as components from '../../vendor/gluestack-ui/status-bar';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('statusBar', components);

export const StatusBar = customComponents.StatusBar;
