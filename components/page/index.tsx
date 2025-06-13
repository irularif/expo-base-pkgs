import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { ReactNode } from 'react';
import { Platform, ScrollViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { KeyboardAvoidingView } from '../keyboard-avoiding-view';
import { ScrollView } from '../scroll-view';
import { View } from '../view';

interface IPage extends ScrollViewProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  rootClassName?: string;
  barStyle?: StatusBarStyle;
  header?: ReactNode;
  disableScroll?: boolean;
}

const Page = (props: IPage) => {
  const {
    children,
    className,
    contentContainerClassName,
    rootClassName,
    barStyle = 'auto',
    header,
    disableScroll = true,
    ...restProps
  } = props;
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';
  const Component = disableScroll ? ScrollView : View;

  return (
    <KeyboardAvoidingView
      behavior={behavior}
      className={twMerge('flex-1 bg-background-page', rootClassName)}
    >
      <StatusBar style={barStyle} />
      {header}
      <Component
        {...restProps}
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
    </KeyboardAvoidingView>
  );
};

export { Page };
