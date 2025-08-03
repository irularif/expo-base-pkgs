import * as components from '../../vendor/gluestack-ui/link';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { Link, LinkText } =
  customComponents satisfies typeof customComponents;
