import type {
  FlashListProps,
  MasonryFlashListProps,
} from '@shopify/flash-list';
import type { StatusBarStyle } from 'expo-status-bar';
import type { ReactNode } from 'react';
import type {
  FlatListProps,
  ScrollViewProps,
  ViewProps,
  VirtualizedListProps,
} from 'react-native';
import type { TGluestackUIProps } from './gluestack-ui';
import { DeepPartial } from './generic';
import { NavigationBarPosition } from 'expo-navigation-bar';

export interface PageProps extends ScrollViewProps {
  children: ReactNode;
  className?: string;
  contentContainerClassName?: string;
  rootClassName?: string;
  barStyle?: StatusBarStyle;
  header?: ReactNode;
  footer?: ReactNode;
  disableScroll?: boolean;
  navigationBarPosition?: NavigationBarPosition;
  navigationBarBackgroundColor?: string;
}

export type TComponents = TGluestackUIProps & {
  Page: PageProps;
  FlatList: FlatListProps;
  View: ViewProps;
  VirtualizedList: VirtualizedListProps;
  FlashList: FlashListProps;
  MasonryFlashList: MasonryFlashListProps;
};

export type TCustomComponents = DeepPartial<TComponents>;

// Add this new type for string paths
export type TComponentPathString = keyof TComponents;
