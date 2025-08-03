import { StatusBar } from 'expo-status-bar';
import { EmitterSubscription, Keyboard, Platform } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { withCustomComponents } from '../../hoc/customComponent';
import { PageProps } from '../../types/components';
import { KeyboardAvoidingView, ScrollView, View } from '../react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';

const BasicPage = (props: PageProps) => {
  const {
    children,
    className,
    contentContainerClassName,
    rootClassName,
    barStyle = 'auto',
    header,
    footer,
    disableScroll = true,
    navigationBarPosition = 'absolute',
    navigationBarBackgroundColor = '#ffffff01',
    ...restProps
  } = props;
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';
  const Component = disableScroll ? ScrollView : View;

  useEffect(() => {
    if (Platform.OS !== 'android') return;
    let keyboardShow: EmitterSubscription, keyboardHide: EmitterSubscription;
    if (navigationBarPosition === 'absolute') {
      keyboardShow = Keyboard.addListener('keyboardDidShow', () => {
        if (Platform.OS === 'android') {
          NavigationBar.setPositionAsync('relative');
        }
      });
      keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
        if (Platform.OS === 'android') {
          NavigationBar.setPositionAsync(navigationBarPosition);
        }
      });
    }
    try {
      NavigationBar.setPositionAsync(navigationBarPosition);
      NavigationBar.setBackgroundColorAsync(navigationBarBackgroundColor);
    } catch (error) {
      console.error('Failed to set navigation bar:', error);
    }
    return () => {
      keyboardShow?.remove();
      keyboardHide?.remove();
    };
  }, [navigationBarPosition, navigationBarBackgroundColor]);

  return (
    <KeyboardAvoidingView
      behavior={behavior}
      className={twMerge('flex-1', rootClassName)}
    >
      <StatusBar style={barStyle} />
      {header}
      <Component
        {...restProps}
        keyboardShouldPersistTaps="handled"
        className={twMerge('flex-1', className)}
        // @ts-ignore
        contentContainerClassName={twMerge(
          'flex-grow pt-safe pb-safe',
          !!header && '!pt-0',
          contentContainerClassName
        )}
      >
        {children}
      </Component>
      {footer}
    </KeyboardAvoidingView>
  );
};

BasicPage.displayName = 'Page';

const Page = withCustomComponents(BasicPage, 'Page');

export { Page };
