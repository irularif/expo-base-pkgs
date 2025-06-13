import * as components from '../../vendor/gluestack-ui/link';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('link', components);

export const Link = customComponents.Link;
export const LinkText = customComponents.LinkText;
