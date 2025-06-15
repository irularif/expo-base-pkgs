import { get, merge } from 'lodash';
import {
  ComponentProps,
  ComponentRef,
  ComponentType,
  createElement,
  forwardRef,
} from 'react';
import { twMerge } from 'tailwind-merge';
import components from '../config/components';
import {
  TComponentPathString,
  TComponentPathStringExact,
} from '../types/components';

const regexPattern =
  /^(?!.*SkeletonText.*)(.*Text.*|.*Heading.*|.*RadioLabel.*|.*CheckboxLabel.*|.*InputField.*|.*TextareaInput.*|.*ToastTitle.*|.*ToastDescription.*)$/;

export const withCustomComponents = <T extends ComponentType<any>>(
  Component: T,
  path: TComponentPathStringExact
): T => {
  const componentName = Component.displayName || Component.name || 'Component';
  const isWhitelisted = regexPattern.test(componentName);

  const WithCustomComponent = forwardRef<ComponentRef<T>, ComponentProps<T>>(
    (props, ref) => {
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
          ref,
          className: twMerge(
            isWhitelisted ? get(components, 'text.Text.className', '') : '',
            get(components, (path + '.className') as string, ''),
            props?.className
          ),
        },
        children
      );
    }
  );

  WithCustomComponent.displayName = `withCustomComponents(${componentName})`;

  return WithCustomComponent as unknown as T;
};

export const groupWithComponentImport = <
  T extends TComponentPathString,
  M extends Record<string, ComponentType<any>>,
>(
  namespace: T,
  moduleImports: M
): M => {
  const result = {} as M;

  (Object.keys(moduleImports) as (keyof M)[]).forEach((name) => {
    if (!name || /^[a-z]/.test(name as string)) return; // Skip hooks or utility functions
    const component = moduleImports[name];
    (result as any)[name] = withCustomComponents(
      component,
      `${namespace}.${name as string}` as TComponentPathStringExact
    );
  });

  return result;
};
