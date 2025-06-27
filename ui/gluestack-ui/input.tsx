import {
  ComponentProps,
  ComponentRef,
  createElement,
  forwardRef,
  useCallback,
  useContext,
} from 'react';
import { FormControlContext } from '../../context/form';
import { groupWithComponentImport } from '../../hoc/customCmponent';
import { useField, useRegisterInputRef } from '../../hooks/useForm';
import { TGluestackUI } from '../../types/gluestack-ui';
import * as components from '../../vendor/gluestack-ui/input';

const withInputField = (Component: TGluestackUI['InputField']) => {
  const WithInputField = forwardRef<
    ComponentRef<typeof Component>,
    ComponentProps<typeof Component>
  >((props: ComponentProps<TGluestackUI['InputField']>, ref) => {
    const { children, onChangeText, ...restProps } = props;
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
  });

  const componentName = Component.displayName || Component.name || 'InputField';
  WithInputField.displayName = `withInputField(${componentName})`;

  return WithInputField;
};

const enhancedComponents = {
  ...components,
  InputField: withInputField(components.InputField),
};

const customComponents = groupWithComponentImport(enhancedComponents);

export const { InputField, InputIcon, InputSlot, Input } =
  customComponents satisfies typeof customComponents;
