import { useFormikContext } from 'formik';
import {
  Children,
  createElement,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';
import { GestureResponderEvent } from 'react-native';
import colors from 'tailwindcss/colors';
import { groupWithComponentImport } from '../../hoc/customCmponent';
import { ButtonProps } from '../../types/components';
import { TGluestackUI } from '../../types/gluestack-ui';
import * as components from '../../vendor/gluestack-ui/button';

export const withFormAction = (Component: TGluestackUI['button']['Button']) => {
  const WithFormAction = (props: ButtonProps) => {
    const { type, onPress, children: _children, ...rest } = props;
    const form = useFormikContext();

    const handlePress = useCallback(
      (e: GestureResponderEvent) => {
        if (type === 'submit') {
          form?.submitForm();
        } else if (type === 'reset') {
          form?.resetForm();
        }
        onPress?.(e);
      },
      [onPress, type, form]
    );

    const children = useMemo(() => {
      const childArray = Children.toArray(_children as ReactNode);
      // Check if form is submitting and no spinner is already present
      if (
        type === 'submit' &&
        form?.isSubmitting &&
        !childArray.some(
          (child) =>
            child &&
            typeof child === 'object' &&
            'type' in child &&
            child.type === ButtonSpinner
        )
      ) {
        // Create a new array with spinner at the beginning
        return [
          <ButtonSpinner key="button-spinner" color={colors.gray[200]} />,
          ...childArray,
        ];
      }

      return childArray;
    }, [_children, form?.isSubmitting, type]);

    return createElement(
      Component,
      {
        disabled: form?.isSubmitting,
        ...rest,
        onPress: handlePress,
      },
      children
    );
  };

  const componentName = Component.displayName || Component.name || 'Button';
  WithFormAction.displayName = `withFormAction(${componentName})`;

  return WithFormAction;
};

const enhancedComponents = {
  ...components,
  Button: withFormAction(components.Button),
} as const;

const customComponents = groupWithComponentImport('button', enhancedComponents);

export const Button = customComponents.Button;
export const ButtonText = customComponents.ButtonText;
export const ButtonSpinner = customComponents.ButtonSpinner;
export const ButtonIcon = customComponents.ButtonIcon;
export const ButtonGroup = customComponents.ButtonGroup;
