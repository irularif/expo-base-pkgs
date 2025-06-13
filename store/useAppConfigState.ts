import { AppColorScheme } from '../constants/Theme';
import { storeWithLocalStorage } from '../utils/store';

export interface IUseAppConfigState {
  colorScheme?: AppColorScheme;
}

const initialAppConfigState: IUseAppConfigState = {
  colorScheme: undefined, // Default to undefined to allow system preference
};
export const useAppConfigState = storeWithLocalStorage(
  'appConfig',
  initialAppConfigState
);
