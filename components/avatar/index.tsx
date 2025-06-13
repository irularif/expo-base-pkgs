import * as components from '../../vendor/gluestack-ui/avatar';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('avatar', components);

export const Avatar = customComponents.Avatar;
export const AvatarBadge = customComponents.AvatarBadge;
export const AvatarFallbackText = customComponents.AvatarFallbackText;
export const AvatarImage = customComponents.AvatarImage;
export const AvatarGroup = customComponents.AvatarGroup;
