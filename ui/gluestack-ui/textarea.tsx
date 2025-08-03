import * as components from '../../vendor/gluestack-ui/textarea';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { Textarea, TextareaInput } =
  customComponents satisfies typeof customComponents;
