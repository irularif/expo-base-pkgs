import * as components from '../../vendor/gluestack-ui/popover';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const {
  Popover,
  PopoverArrow,
  PopoverBackdrop,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
} = customComponents satisfies typeof customComponents;
