import {
  ComponentProps,
  ComponentRef,
  createElement,
  forwardRef,
  useContext,
  useMemo,
} from 'react';
import { FormControlContext } from '../../context/form';
import { groupWithComponentImport } from '../../hoc/customCmponent';
import { useField } from '../../hooks/useForm';
import { TGluestackUI } from '../../types/gluestack-ui';
import * as components from '../../vendor/gluestack-ui/form-control';

const withFormControl = (Component: TGluestackUI['FormControl']) => {
  const FormControlComponent = forwardRef<
    ComponentRef<typeof Component>,
    ComponentProps<typeof Component> & {
      name?: string;
    }
  >((props, ref) => {
    const { name, ...rest } = props;
    const { meta } = useField(name ?? '');
    const isInvalid = useMemo(() => meta?.touched && !!meta?.error, [meta]);

    return (
      <FormControlContext value={name}>
        {createElement(Component, {
          isInvalid,
          ...rest,
          ref,
        })}
      </FormControlContext>
    );
  });

  const componentName =
    Component.displayName || Component.name || 'FormControl';
  FormControlComponent.displayName = `withFormControl(${componentName})`;

  return FormControlComponent;
};

const withFormControlLabel = (
  Component: TGluestackUI['FormControlLabelText']
) => {
  const FormControlLabelComponent = forwardRef<
    ComponentRef<typeof Component>,
    ComponentProps<typeof Component>
  >((props, ref) => {
    const name = useContext(FormControlContext) ?? '';
    const { handleFocus } = useField(name);

    return createElement(Component, {
      onPress: handleFocus,
      ...props,
      ref,
    });
  });

  const componentName =
    Component.displayName || Component.name || 'FormControlLabelText';
  FormControlLabelComponent.displayName = `withFormControlLabel(${componentName})`;

  return FormControlLabelComponent;
};

const withFormControlErrorText = (
  Component: TGluestackUI['FormControlErrorText']
) => {
  const FormControlErrorTextComponent = forwardRef<
    ComponentRef<typeof Component>,
    ComponentProps<typeof Component>
  >((props, ref) => {
    const name = useContext(FormControlContext) ?? '';
    const { meta } = useField(name);

    return createElement(
      Component,
      {
        ...props,
        ref,
      },
      meta?.error
    );
  });

  const componentName =
    Component.displayName || Component.name || 'FormControlErrorText';
  FormControlErrorTextComponent.displayName = `withFormControlErrorText(${componentName})`;

  return FormControlErrorTextComponent;
};

const enhancedComponents = {
  ...components,
  FormControl: withFormControl(components.FormControl),
  FormControlErrorText: withFormControlErrorText(
    components.FormControlErrorText
  ),
  FormControlLabelText: withFormControlLabel(components.FormControlLabelText),
} as const;

const customComponents = groupWithComponentImport(enhancedComponents);

export const {
  FormControl,
  FormControlLabelText,
  FormControlErrorText,
  FormControlHelperText,
  FormControlErrorIcon,
  FormControlLabelAstrick,
  FormControlHelper,
  FormControlError,
  FormControlLabel,
} = customComponents satisfies typeof customComponents;
