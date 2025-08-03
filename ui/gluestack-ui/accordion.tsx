import { groupWithComponentImport } from '../../hoc/customComponent';
import * as accordion from '../../vendor/gluestack-ui/accordion';

// Type-safe component grouping
const accordionComponents = groupWithComponentImport(accordion);

// Type-safe exports using satisfies operator for better type inference
export const {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
  AccordionContent,
} = accordionComponents satisfies typeof accordionComponents;
