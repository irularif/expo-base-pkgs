import * as components from '../../vendor/gluestack-ui/refresh-control';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('refreshControl', components);

export const RefreshControl = customComponents.RefreshControl;
