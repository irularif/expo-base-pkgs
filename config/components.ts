import { merge } from 'lodash';
import { TCustomComponents } from '../types/components';
import * as custom from '@app/config/components';

let components: TCustomComponents = {
  FormControlErrorText: {
    size: 'sm',
  },
};

try {
  if (custom?.default || (custom as any)?.components) {
    components = merge(
      {},
      components,
      custom?.default ?? (custom as any)?.components
    );
  }
} catch (_) {
  console.warn('Failed to load user components, using default components.');
}

export default components;
