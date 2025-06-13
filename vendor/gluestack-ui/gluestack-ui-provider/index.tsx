import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
import { useColorScheme } from 'nativewind';
import React, { useEffect, useMemo } from 'react';
import { View, ViewProps } from 'react-native';
import { defaultColors } from './defaultColors';
import { ModeType } from './types';

let colors = defaultColors;

export function GluestackUIProvider({
  mode = 'light',
  ...props
}: {
  mode?: ModeType;
  children?: React.ReactNode;
  style?: ViewProps['style'];
}) {
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    setColorScheme(mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const themeColors = useMemo(() => {
    return colors[colorScheme!];
  }, [colorScheme]);

  return (
    <View
      style={[
        themeColors,
        { flex: 1, height: '100%', width: '100%' },
        props.style,
      ]}
    >
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
}
