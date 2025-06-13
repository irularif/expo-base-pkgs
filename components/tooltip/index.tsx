import * as components from '../../vendor/gluestack-ui/tooltip';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('tooltip', components);

export const Tooltip = customComponents.Tooltip;
export const TooltipContent = customComponents.TooltipContent;
export const TooltipText = customComponents.TooltipText;
