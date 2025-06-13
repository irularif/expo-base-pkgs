import * as components from '../../vendor/gluestack-ui/popover';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('popover', components);

export const Popover = customComponents.Popover;
export const PopoverBackdrop = customComponents.PopoverBackdrop;
export const PopoverArrow = customComponents.PopoverArrow;
export const PopoverCloseButton = customComponents.PopoverCloseButton;
export const PopoverFooter = customComponents.PopoverFooter;
export const PopoverHeader = customComponents.PopoverHeader;
export const PopoverBody = customComponents.PopoverBody;
export const PopoverContent = customComponents.PopoverContent;
