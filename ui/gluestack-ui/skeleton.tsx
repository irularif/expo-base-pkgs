import * as components from '../../vendor/gluestack-ui/skeleton';
import { groupWithComponentImport } from '../../hoc/customComponent';

const customComponents = groupWithComponentImport(components);

export const { Skeleton, SkeletonText } =
  customComponents satisfies typeof customComponents;
