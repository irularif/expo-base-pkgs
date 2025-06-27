import { useAppProviderState } from '../store/useAppProviderState';
import { IAppProvider } from '../types/provider';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

const FontProvider = ({ config = {} }: Partial<IAppProvider>) => {
  const { fonts = {} } = config;
  const [loaded, error] = useFonts({
    ...fonts,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      useAppProviderState.setState((v) => ({ ...v, isFontReady: true }));
    }
  }, [loaded]);

  return null;
};

export default FontProvider;
