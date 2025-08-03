import * as components from '../../vendor/gluestack-ui/spinner';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { Spinner } = customComponents satisfies typeof customComponents;
