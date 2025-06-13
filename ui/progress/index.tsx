import * as components from '../../vendor/gluestack-ui/progress';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('progress', components);

export const Progress = customComponents.Progress;
export const ProgressFilledTrack = customComponents.ProgressFilledTrack;
