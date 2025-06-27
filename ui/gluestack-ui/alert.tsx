import * as components from '../../vendor/gluestack-ui/alert';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Alert, AlertText, AlertIcon } =
  customComponents satisfies typeof customComponents;
