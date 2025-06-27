import * as components from '../../vendor/gluestack-ui/switch';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Switch } = customComponents satisfies typeof customComponents;
