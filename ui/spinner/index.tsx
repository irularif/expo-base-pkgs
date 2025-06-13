import * as components from '../../vendor/gluestack-ui/spinner';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('spinner', components);

export const Spinner = customComponents.Spinner;
