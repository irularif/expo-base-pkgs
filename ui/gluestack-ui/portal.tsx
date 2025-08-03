import * as components from '../../vendor/gluestack-ui/portal';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { Portal } = customComponents satisfies typeof customComponents;
