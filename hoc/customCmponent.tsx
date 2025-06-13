import { get, merge } from 'lodash';
import { ComponentProps, ComponentType, createElement } from 'react';
import { twMerge } from 'tailwind-merge';
import components from '../config/components';
import {
  TComponentPathString,
  TComponentPathStringExact,
} from '../types/components';
import { TGluestackUI } from '../types/gluestack-ui';

export const withCustomComponents = <T extends ComponentType<any>>(
  Component: T,
  path: TComponentPathStringExact
): T => {
  const WithCustomComponent = (props: ComponentProps<T>) => {
    const { children, ...restProps } = props;
    const mergedProps = merge(
      {},
      get(components, path as string, {}),
      restProps
    );
    return createElement(
      Component,
      {
        ...mergedProps,
        className: twMerge(
          get(components, (path + '.className') as string, ''),
          props?.className
        ),
      },
      children
    );
  };

  // Set display name for better debugging
  const componentName = Component.displayName || Component.name || 'Component';
  WithCustomComponent.displayName = `WithCustomComponents(${componentName})`;

  return WithCustomComponent as T;
};

export const groupWithComponentImport = <
  T extends TComponentPathString,
  M extends TGluestackUI[T],
>(
  namespace: T,
  moduleImports: M
): M => {
  const result = {} as M;

  (Object.keys(moduleImports) as Array<keyof M>).forEach((name) => {
    if (!name || /^[a-z]/.test(name as string)) return; // Skip hooks or utility functions
    const component = moduleImports[name];
    (result as any)[name] = withCustomComponents(
      component,
      `${namespace}.${name as string}` as TComponentPathStringExact
    );
  });

  return result;
};
