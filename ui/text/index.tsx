import * as components from '../../vendor/gluestack-ui/text';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('text', components);

export const Text = customComponents.Text;
