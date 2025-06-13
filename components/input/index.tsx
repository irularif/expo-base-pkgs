import {
  ComponentProps,
  createElement,
  ForwardedRef,
  forwardRef,
  useContext,
} from 'react';
import { FormControlContext } from '../../context/form';
import * as components from '../../vendor/gluestack-ui/input';
import { groupWithComponentImport } from '../../hoc/customCmponent';
import { useField, useRegisterInputRef } from '../../hooks/useForm';
import { TGluestackUI } from '../../types/gluestack-ui';

const withInputField = (Component: TGluestackUI['input']['InputField']) => {
  const WithInputField = forwardRef(
    (
      props: ComponentProps<TGluestackUI['input']['InputField']>,
      ref: ForwardedRef<any>
    ) => {
      const { children, ...restProps } = props;
      const name = useContext(FormControlContext) ?? '';
      const { setRef, nextField } = useRegisterInputRef(name);
      const { field, helpers } = useField(name);

      return createElement(
        Component,
        {
          onSubmitEditing: nextField,
          value: field.value,
          onChangeText: helpers.setValue,
          ...restProps,
          ref: setRef(ref),
        },
        children
      );
    }
  );

  WithInputField.displayName = `WithInputField(${Component.displayName || Component.name || 'InputField'})`;

  return WithInputField;
};

const enhancedComponents = {
  ...components,
  InputField: withInputField(components.InputField),
};

const customComponents = groupWithComponentImport('input', enhancedComponents);

export const InputField = customComponents.InputField;
export const InputIcon = customComponents.InputIcon;
export const InputSlot = customComponents.InputSlot;
export const Input = customComponents.Input;
