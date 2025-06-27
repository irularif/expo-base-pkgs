import {
  FlashList as RNFlashList,
  MasonryFlashList as RNMasonryFlashList,
} from '@shopify/flash-list';
import { groupWithComponentImport } from '../../hoc/customCmponent';
import { cssInterop } from 'react-native-css-interop';

cssInterop(RNFlashList, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
});
cssInterop(RNMasonryFlashList, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
});

const customComponents = groupWithComponentImport({
  FlashList: RNFlashList,
  MasonryFlashList: RNMasonryFlashList,
});

export const FlashList = customComponents.FlashList;
