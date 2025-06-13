import * as components from '../../vendor/gluestack-ui/portal';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('portal', components);

export const Portal = customComponents.Portal;
