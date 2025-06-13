import * as components from '../../vendor/gluestack-ui/fab';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('fab', components);

export const Fab = customComponents.Fab;
export const FabLabel = customComponents.FabLabel;
export const FabIcon = customComponents.FabIcon;
