/* eslint-disable react-hooks/rules-of-hooks */
import type { AnyUpdater, Listener } from '@tanstack/react-store';
import { Store, useStore } from '@tanstack/react-store';
import { isEmpty, isFunction, isObject, omitBy } from 'lodash';
import { storage } from './storage';

interface StoreOptions<
  TState,
  TUpdater extends AnyUpdater = (cb: TState) => TState,
> {
  updateFn?: (previous: TState) => (updater: TUpdater) => TState;
  onSubscribe?: (
    listener: Listener<TState>,
    store: Store<TState, TUpdater>
  ) => () => void;
  onUpdate?: () => void;
}

const useBound = <TState, TUpdater extends AnyUpdater = (cb: TState) => TState>(
  store: Store<TState, TUpdater>
) => {
  const useBoundStore = <TSelected = TState>(
    selector?: (state: TState) => TSelected
  ) => useStore(store, selector);
  Object.assign(useBoundStore, store);
  return useBoundStore as typeof useBoundStore & Store<TState, TUpdater>;
};

export const store = <TState>(
  initialValue: TState,
  options?: StoreOptions<TState>
) => useBound(new Store(initialValue, options));

export const storeWithLocalStorage = <TState>(
  key: string,
  initialValue: TState,
  options?: StoreOptions<TState> & {
    encryptStore?: boolean;
  }
) => {
  const _store = new Store(initialValue, {
    ...options,
    onUpdate() {
      options?.onUpdate?.();
      storage.set(
        key,
        isObject(_store.state)
          ? omitBy(_store.state, isFunction)
          : _store.state,
        options?.encryptStore
      );
    },
  });
  try {
    storage.get(key).then((savedData) => {
      if (!isEmpty(savedData)) {
        _store.setState(() => savedData);
      }
    });
  } catch (_) {
    console.warn(`Failed to load store from local storage with key: ${key}`);
  }
  return useBound(_store);
};
