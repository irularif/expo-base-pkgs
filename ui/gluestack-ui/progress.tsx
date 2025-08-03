import * as components from '../../vendor/gluestack-ui/progress';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { Progress, ProgressFilledTrack } =
  customComponents satisfies typeof customComponents;
