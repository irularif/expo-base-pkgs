import * as components from '../../vendor/gluestack-ui/slider';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const { Slider, SliderThumb, SliderTrack, SliderFilledTrack } =
  customComponents satisfies typeof customComponents;
