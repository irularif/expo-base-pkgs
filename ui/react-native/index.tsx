import { groupWithComponentImport } from '../../hoc/customComponent';
import {
  RefreshControl as RNRefreshControl,
  VirtualizedList as RNVirtualizedList,
  FlatList as RNFlatList,
  View as RNView,
  SectionList as RNSectionList,
  StatusBar as RNStatusBar,
  ScrollView as RNScrollView,
  SafeAreaView as RNSafeAreaView,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  InputAccessoryView as RNInputAccessoryView,
} from 'react-native';

const customComponents = groupWithComponentImport({
  RefreshControl: RNRefreshControl,
  VirtualizedList: RNVirtualizedList,
  FlatList: RNFlatList,
  View: RNView,
  SectionList: RNSectionList,
  StatusBar: RNStatusBar,
  ScrollView: RNScrollView,
  SafeAreaView: RNSafeAreaView,
  KeyboardAvoidingView: RNKeyboardAvoidingView,
  InputAccessoryView: RNInputAccessoryView,
});

export const RefreshControl = customComponents.RefreshControl;
export const VirtualizedList = customComponents.VirtualizedList;
export const FlatList = customComponents.FlatList;
export const View = customComponents.View;
export const SectionList = customComponents.SectionList;
export const StatusBar = customComponents.StatusBar;
export const ScrollView = customComponents.ScrollView;
export const SafeAreaView = customComponents.SafeAreaView;
export const KeyboardAvoidingView = customComponents.KeyboardAvoidingView;
export const InputAccessoryView = customComponents.InputAccessoryView;
