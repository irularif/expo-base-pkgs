import {
  ComponentProps,
  ComponentRef,
  createElement,
  forwardRef,
  useContext,
} from 'react';
import { FormControlContext } from '../../context/form';
import { groupWithComponentImport } from '../../hoc/customCmponent';
import { useField } from '../../hooks/useForm';
import { FormControlProps } from '../../types/components';
import { TGluestackUI } from '../../types/gluestack-ui';
import * as components from '../../vendor/gluestack-ui/form-control';

const withFormControl = (
  Component: TGluestackUI['formControl']['FormControl']
) => {
  const FormControlComponent = forwardRef<
    ComponentRef<typeof Component>,
    FormControlProps
  >((props: FormControlProps, ref) => {
    const { name, ...rest } = props;
    const { meta } = useField(name ?? '');

    return (
      <FormControlContext.Provider value={name}>
        {createElement(Component, {
          isInvalid: meta?.touched && !!meta?.error,
          ...rest,
          ref,
        })}
      </FormControlContext.Provider>
    );
  });

  const componentName =
    Component.displayName || Component.name || 'FormControl';
  FormControlComponent.displayName = `withFormControl(${componentName})`;

  return FormControlComponent;
};

const withFormControlLabel = (
  Component: TGluestackUI['formControl']['FormControlLabelText']
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
  Component: TGluestackUI['formControl']['FormControlErrorText']
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

const customComponents = groupWithComponentImport(
  'formControl',
  enhancedComponents
);

export const FormControl = customComponents.FormControl;
export const FormControlError = customComponents.FormControlError;
export const FormControlErrorText = customComponents.FormControlErrorText;
export const FormControlErrorIcon = customComponents.FormControlErrorIcon;
export const FormControlLabel = customComponents.FormControlLabel;
export const FormControlLabelText = customComponents.FormControlLabelText;
export const FormControlLabelAstrick = customComponents.FormControlLabelAstrick;
export const FormControlHelper = customComponents.FormControlHelper;
export const FormControlHelperText = customComponents.FormControlHelperText;
