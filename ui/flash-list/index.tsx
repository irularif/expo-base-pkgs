import { groupWithComponentImport } from '../../hoc/customCmponent';
import {
  FlashList as RNFlashList,
  MasonryFlashList as RNMasonryFlashList,
} from '@shopify/flash-list';

const customComponents = groupWithComponentImport({
  FlashList: RNFlashList,
  MasonryFlashList: RNMasonryFlashList,
});

export const FlashList = customComponents.FlashList;
