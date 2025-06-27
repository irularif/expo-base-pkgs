import * as components from '../../vendor/gluestack-ui/textarea';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Textarea, TextareaInput } =
  customComponents satisfies typeof customComponents;
