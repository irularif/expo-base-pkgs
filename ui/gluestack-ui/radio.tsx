import * as components from '../../vendor/gluestack-ui/radio';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { Radio, RadioGroup, RadioIndicator, RadioLabel, RadioIcon } =
  customComponents satisfies typeof customComponents;
