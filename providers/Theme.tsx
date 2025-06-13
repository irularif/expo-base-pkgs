import colors from '../config/colors';
import { AppColorScheme } from '../constants/Theme';
import { useAppConfigState } from '../store/useAppConfigState';
import { IAppProvider } from '../types/provider';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native';
import { useColorScheme, vars } from 'nativewind';
import React, { useCallback, useEffect, useMemo } from 'react';
import { View } from 'react-native';

export function ThemeProvider({
  config = {},
  children,
}: Partial<IAppProvider>) {
  const { colorScheme: defaultColorScheme = AppColorScheme.LIGHT } = config;
  const { colorScheme = 'light', setColorScheme } = useColorScheme();
  const appColorScheme = useAppConfigState((state) => state.colorScheme);

  const handleColorSchemeChange = useCallback(
    (scheme: AppColorScheme) => {
      if (!appColorScheme) {
        useAppConfigState.setState((prev) => ({
          ...prev,
          colorScheme: scheme,
        }));
      }
    },
    [appColorScheme]
  );

  useEffect(() => {
    handleColorSchemeChange(defaultColorScheme);
  }, [defaultColorScheme, handleColorSchemeChange]);

  useEffect(() => {
    if (appColorScheme && appColorScheme !== colorScheme) {
      setColorScheme(appColorScheme);
    }
  }, [appColorScheme, colorScheme, setColorScheme]);

  const themeColors = useMemo(() => {
    return vars(colors[colorScheme!]);
  }, [colorScheme]);

  return (
    <View
      style={[
        themeColors,
        { flex: 1, height: '100%', width: '100%', backgroundColor: 'white' },
      ]}
    >
      <NavigationThemeProvider
        value={colorScheme === AppColorScheme.DARK ? DarkTheme : DefaultTheme}
      >
        {children}
      </NavigationThemeProvider>
    </View>
  );
}
