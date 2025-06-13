import { store } from '../utils/store';

export interface IUseAppProviderState {
  isFontReady: boolean;
  isThemeReady: boolean;
  isInitReady: boolean;
}

const initialAppProviderState: IUseAppProviderState = {
  isFontReady: false,
  isThemeReady: false,
  isInitReady: false,
};
export const useAppProviderState = store(initialAppProviderState);
