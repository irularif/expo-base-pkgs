import { ComponentProps, createElement, useCallback, useContext } from 'react';
import { FormControlContext } from '../../context/form';
import { groupWithComponentImport } from '../../hoc/customCmponent';
import { useField, useRegisterInputRef } from '../../hooks/useForm';
import { TGluestackUI } from '../../types/gluestack-ui';
import * as components from '../../vendor/gluestack-ui/input';

const withInputField = (Component: TGluestackUI['input']['InputField']) => {
  const WithInputField = (
    props: ComponentProps<TGluestackUI['input']['InputField']>
  ) => {
    const { children, ref, onChangeText, ...restProps } = props;
    const name = useContext(FormControlContext) ?? '';
    const { setRef, nextField } = useRegisterInputRef(name);
    const { field, helpers } = useField(name);

    const _onChangeText = useCallback(
      (text: any) => {
        helpers?.setTouched(true);
        helpers?.setValue(text);
        onChangeText?.(text);
      },
      [helpers, onChangeText]
    );

    return createElement(
      Component,
      {
        onSubmitEditing: nextField,
        value: field?.value,
        ...restProps,
        onChangeText: _onChangeText,
        ref: setRef(ref),
      },
      children
    );
  };

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
