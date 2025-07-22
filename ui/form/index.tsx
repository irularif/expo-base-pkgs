import {
  Formik,
  FormikConfig,
  FormikContextType,
  FormikProps,
  FormikValues,
  useFormikContext,
} from 'formik';
import { noop } from 'lodash';
import React, { useImperativeHandle, useRef } from 'react';
import { FormContext } from '../../context/form';
import { useFormRef } from '../../hooks/useForm';

const Form = <Values extends FormikValues = FormikValues, ExtraProps = any>(
  props: FormikConfig<Values> & ExtraProps & { children: React.ReactNode }
) => {
  const { children, innerRef = noop, ...rest } = props;
  const formRef = useRef<FormikProps<Values>>(null!);
  const form = useFormRef(formRef);

  useImperativeHandle(innerRef, () => ({ ...formRef.current }), []);

  return (
    <FormContext value={form}>
      <Formik innerRef={formRef} {...rest}>
        <>{children}</>
      </Formik>
    </FormContext>
  );
};

interface SubscribeFormProps<Values> {
  children: (props: FormikContextType<Values>) => React.ReactNode;
}

const SubscribeForm = <Values extends FormikValues = FormikValues>(
  props: SubscribeFormProps<Values>
) => {
  const { children } = props;
  const form = useFormikContext<Values>();
  return <React.Fragment>{children(form)}</React.Fragment>;
};

export { Form, Formik, SubscribeForm };
