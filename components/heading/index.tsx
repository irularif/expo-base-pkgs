import * as components from '../../vendor/gluestack-ui/heading';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('heading', components);

export const Heading = customComponents.Heading;
