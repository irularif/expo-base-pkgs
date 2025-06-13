import { groupWithComponentImport } from '../../hoc/customCmponent';
import * as components from '../../vendor/gluestack-ui/accordion';

const customComponents = groupWithComponentImport('accordion', components);

export const Accordion = customComponents.Accordion;
export const AccordionItem = customComponents.AccordionItem;
export const AccordionHeader = customComponents.AccordionHeader;
export const AccordionTrigger = customComponents.AccordionTrigger;
export const AccordionTitleText = customComponents.AccordionTitleText;
export const AccordionContentText = customComponents.AccordionContentText;
export const AccordionIcon = customComponents.AccordionIcon;
export const AccordionContent = customComponents.AccordionContent;
