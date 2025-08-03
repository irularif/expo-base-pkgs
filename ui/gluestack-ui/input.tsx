import {
  ComponentProps,
  ComponentRef,
  createElement,
  forwardRef,
  useCallback,
  useContext,
  useState,
} from 'react';
import {
  FormControlContext,
  InputSecureTextEntryContext,
} from '../../context/form';
import { groupWithComponentImport } from '../../hoc/customComponent';
import { useField, useRegisterInputRef } from '../../hooks/useForm';
import { TGluestackUI } from '../../types/gluestack-ui';
import * as components from '../../vendor/gluestack-ui/input';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

const withInput = (Component: TGluestackUI['Input']) => {
  const WithInput = forwardRef<
    ComponentRef<typeof Component>,
    ComponentProps<typeof Component> & {
      secureTextEntry?: boolean;
    }
  >((props, ref) => {
    const {
      children,
      secureTextEntry: defaultSecureTextEntry = false,
      ...restProps
    } = props;
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(
      defaultSecureTextEntry
    );

    return (
      <InputSecureTextEntryContext value={secureTextEntry}>
        {createElement(
          Component,
          {
            ...restProps,
            ref,
          },
          <>
            {children}
            {defaultSecureTextEntry && (
              <InputSlot
                className="pr-3"
                onPress={() => {
                  setSecureTextEntry((prev) => !prev);
                }}
                onStartShouldSetResponder={() => true}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                }}
              >
                <InputIcon as={secureTextEntry ? EyeOffIcon : EyeIcon} />
              </InputSlot>
            )}
          </>
        )}
      </InputSecureTextEntryContext>
    );
  });

  const componentName = Component.displayName || Component.name || 'Input';
  WithInput.displayName = `withInput(${componentName})`;

  return WithInput;
};

const withInputField = (Component: TGluestackUI['InputField']) => {
  const WithInputField = forwardRef<
    ComponentRef<typeof Component>,
    ComponentProps<typeof Component>
  >((props: ComponentProps<TGluestackUI['InputField']>, ref) => {
    const { children, onChangeText, ...restProps } = props;
    const name = useContext(FormControlContext) ?? '';
    const { setRef, nextField } = useRegisterInputRef(name);
    const { field, helpers } = useField(name);
    const isSecure = useContext(InputSecureTextEntryContext) ?? false;

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
        secureTextEntry: isSecure,
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
  Input: withInput(components.Input),
};

const customComponents = groupWithComponentImport(enhancedComponents);

export const { InputField, InputIcon, InputSlot, Input } =
  customComponents satisfies typeof customComponents;
