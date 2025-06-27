import * as components from '../../vendor/gluestack-ui/card';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Card } = customComponents satisfies typeof customComponents;
