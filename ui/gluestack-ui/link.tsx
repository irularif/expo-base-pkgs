import * as components from '../../vendor/gluestack-ui/link';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Link, LinkText } =
  customComponents satisfies typeof customComponents;
