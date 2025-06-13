import * as components from '../../vendor/gluestack-ui/badge';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('badge', components);

export const Badge = customComponents.Badge;
export const BadgeIcon = customComponents.BadgeIcon;
export const BadgeText = customComponents.BadgeText;
