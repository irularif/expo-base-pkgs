import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { withCustomComponents } from '../../hoc/customCmponent';
import { PageProps } from '../../types/components';
import { KeyboardAvoidingView, ScrollView, View } from '../react-native';

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
    ...restProps
  } = props;
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';
  const Component = disableScroll ? ScrollView : View;

  return (
    <KeyboardAvoidingView
      behavior={behavior}
      className={twMerge('flex-1', rootClassName)}
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
      {footer}
    </KeyboardAvoidingView>
  );
};

BasicPage.displayName = 'Page';

const Page = withCustomComponents(BasicPage, 'Page');

export { Page };
