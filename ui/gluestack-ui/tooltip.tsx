import * as components from '../../vendor/gluestack-ui/tooltip';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { Tooltip, TooltipContent, TooltipText } =
  customComponents satisfies typeof customComponents;
