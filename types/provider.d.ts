import { AppTheme } from '../constants/Theme';
import { FontSource } from 'expo-font';
import type { ReactNode } from 'react';

export interface IProvider {
  children?: ReactNode;
  onAppReady?: () => Promise<void>;
  config?: {
    fonts?: Record<string, FontSource>;
    preventAutoHide?: boolean;
    colorScheme?: AppTheme;
  };
}

export interface IAppProvider extends IProvider {
  setIsReady: () => void;
}
