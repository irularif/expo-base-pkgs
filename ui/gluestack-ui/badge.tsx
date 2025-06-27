import * as components from '../../vendor/gluestack-ui/badge';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Badge, BadgeIcon, BadgeText } =
  customComponents satisfies typeof customComponents;
