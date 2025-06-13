import * as components from '../../vendor/gluestack-ui/textarea';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('textArea', components);

export const Textarea = customComponents.Textarea;
export const TextareaInput = customComponents.TextareaInput;
