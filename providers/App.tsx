import { PortalProvider } from '@gorhom/portal';
import { useAppProviderState } from '../store/useAppProviderState';
import { IProvider } from '../types/provider';
import * as SplashScreen from 'expo-splash-screen';
import { find, isEmpty, omit } from 'lodash';
import React, { useCallback, useEffect, useMemo } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Show } from '../components/renderer';
import FontProvider from './Font';
import QueryProvider from './Query';
import { ThemeProvider } from './Theme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const AppProvider = ({
  children,
  config = {},
  onAppReady,
}: IProvider) => {
  const { preventAutoHide = false } = config;
  const appStatus = useAppProviderState();
  const setAppStatus = useAppProviderState.setState;

  const isReady = useMemo(
    () => isEmpty(find(appStatus, (v) => !v)),
    [appStatus]
  );

  const runAppReady = useCallback(async () => {
    const isReady = !isEmpty(find(omit(appStatus, ['isInitReady']), (v) => !v));
    if (isReady) {
      if (onAppReady) {
        await onAppReady();
      }
      setAppStatus((v) => ({ ...v, isInitReady: true }));
    }
  }, [appStatus, onAppReady, setAppStatus]);

  useEffect(() => {
    if (isReady && !preventAutoHide) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 500);
    }
  }, [isReady, preventAutoHide]);

  useEffect(() => {
    runAppReady();
  }, [runAppReady]);

  return (
    <GestureHandlerRootView>
      <QueryProvider>
        <FontProvider config={config} />
        <ThemeProvider config={config}>
          <PortalProvider>
            <Show.When if={isReady}>{children}</Show.When>
          </PortalProvider>
        </ThemeProvider>
      </QueryProvider>
    </GestureHandlerRootView>
  );
};
