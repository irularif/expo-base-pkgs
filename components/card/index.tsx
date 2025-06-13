import * as components from '../../vendor/gluestack-ui/card';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('card', components);

export const Card = customComponents.Card;
