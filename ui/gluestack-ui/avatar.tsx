import * as components from '../../vendor/gluestack-ui/avatar';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  AvatarGroup,
} = customComponents satisfies typeof customComponents;
