import * as components from '../../vendor/gluestack-ui/skeleton';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('skeleton', components);

export const Skeleton = customComponents.Skeleton;
export const SkeletonText = customComponents.SkeletonText;
