import { ComponentProps, createElement, useContext } from 'react';
import { FormControlContext } from '../../context/form';
import { groupWithComponentImport } from '../../hoc/customCmponent';
import { useField } from '../../hooks/useForm';
import { FormControlProps } from '../../types/components';
import { TGluestackUI } from '../../types/gluestack-ui';
import * as components from '../../vendor/gluestack-ui/form-control';

const withFormControl = (
  Component: TGluestackUI['formControl']['FormControl']
) => {
  const FormControlComponent = (props: FormControlProps) => {
    const { name, ...rest } = props;
    const { meta } = useField(name ?? '');

    return (
      <FormControlContext.Provider value={name}>
        {createElement(Component, {
          isInvalid: !!meta?.error,
          ...rest,
        })}
      </FormControlContext.Provider>
    );
  };

  FormControlComponent.displayName = 'FormControl';
  return FormControlComponent;
};

const withFormControlLabel = (
  Component: TGluestackUI['formControl']['FormControlLabelText']
) => {
  const FormControlLabelComponent = (
    props: ComponentProps<TGluestackUI['formControl']['FormControlLabelText']>
  ) => {
    const name = useContext(FormControlContext) ?? '';
    const { handleFocus } = useField(name);

    return createElement(Component, {
      onPress: handleFocus,
      ...props,
    });
  };

  FormControlLabelComponent.displayName = 'FormControlLabelText';
  return FormControlLabelComponent;
};

const withFormControlErrorText = (
  Component: TGluestackUI['formControl']['FormControlErrorText']
) => {
  const FormControlErrorTextComponent = (
    props: ComponentProps<TGluestackUI['formControl']['FormControlErrorText']>
  ) => {
    const name = useContext(FormControlContext) ?? '';
    const { meta } = useField(name);

    return createElement(
      Component,
      {
        ...props,
      },
      meta?.error
    );
  };

  FormControlErrorTextComponent.displayName = 'FormControlErrorText';
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
