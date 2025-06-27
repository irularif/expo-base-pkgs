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
import { TComponentPathString } from '../types/components';

const regexPattern =
  /^(?!.*SkeletonText.*)(.*Text.*|.*Heading.*|.*RadioLabel.*|.*CheckboxLabel.*|.*InputField.*|.*TextareaInput.*|.*ToastTitle.*|.*ToastDescription.*)$/;

export const withCustomComponents = <T extends ComponentType<any>>(
  Component: T,
  path: TComponentPathString
): T => {
  const componentName = Component.displayName || Component.name || 'Component';
  const isTextBasedComponent = regexPattern.test(componentName);

  const WithCustomComponent = forwardRef<ComponentRef<T>, ComponentProps<T>>(
    (props, ref) => {
      const { children, ...restProps } = props;
      const mergedProps = merge(
        restProps,
        get(components, path as string, {}),
        {
          ref,
          className: twMerge(
            isTextBasedComponent
              ? get(components, 'text.Text.className', '')
              : '',
            get(components, (path + '.className') as string, ''),
            props?.className
          ),
        }
      );
      return createElement(Component, mergedProps, children);
    }
  );

  WithCustomComponent.displayName = `withCustomComponents(${componentName})`;

  return WithCustomComponent as unknown as T;
};

export const groupWithComponentImport = <
  M extends Record<string, ComponentType<any>>,
>(
  moduleImports: M
): M => {
  const result = {} as M;

  (Object.keys(moduleImports) as (keyof M)[]).forEach((name) => {
    if (!name || /^[a-z]/.test(name as string)) return; // Skip hooks or utility functions
    const component = moduleImports[name];
    (result as any)[name] = withCustomComponents(
      component,
      `${name as string}` as TComponentPathString
    );
  });

  return result;
};
