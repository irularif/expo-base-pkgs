import { AppColorScheme } from '../constants/Theme';
import { useAppConfigState } from '../store/useAppConfigState';
import { useCallback } from 'react';

export const useAppConfig = () => {
  const appConfig = useAppConfigState();
  const setColorScheme = useCallback((scheme: AppColorScheme) => {
    useAppConfigState.setState((prev) => ({
      ...prev,
      colorScheme: scheme,
    }));
  }, []);

  return {
    ...appConfig,
    setColorScheme,
  };
};
