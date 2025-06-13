import * as components from '../../vendor/gluestack-ui/view';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('view', components);

export const View = customComponents.View;
