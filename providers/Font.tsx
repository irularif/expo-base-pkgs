import { useAppProviderState } from '../store/useAppProviderState';
import { IAppProvider } from '../types/provider';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

const FontProvider = ({ config = {} }: Partial<IAppProvider>) => {
  const { fonts = {} } = config;
  const setAppStatus = useAppProviderState.setState;
  const [loaded, error] = useFonts({
    ...fonts,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      setAppStatus((v) => ({ ...v, isFontReady: true }));
    }
  }, [loaded, setAppStatus]);

  return null;
};

export default FontProvider;
