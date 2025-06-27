import * as components from '../../vendor/gluestack-ui/progress';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Progress, ProgressFilledTrack } =
  customComponents satisfies typeof customComponents;
