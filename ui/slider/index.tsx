import * as components from '../../vendor/gluestack-ui/slider';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('slider', components);

export const Slider = customComponents.Slider;
export const SliderThumb = customComponents.SliderThumb;
export const SliderTrack = customComponents.SliderTrack;
export const SliderFilledTrack = customComponents.SliderFilledTrack;
