import { FormContext } from '../context/form';
import { IFieldRef, IFormContext } from '../types/form';
import { FormikProps, FormikValues, useField as useFormikField } from 'formik';
import {
  ForwardedRef,
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';

export const useFormContext = () => {
  const context = useContext<IFormContext | null>(FormContext);

  return context;
};

export const useFormRef = <Values extends FormikValues = FormikValues>(
  formRef: RefObject<FormikProps<Values>>
) => {
  const refs = useRef<IFieldRef[]>([]);
  const form = useMemo(
    () => ({
      getRef: (name: string) => {
        const idx = refs.current.findIndex((r) => r.name === name);
        if (idx > -1) {
          return refs.current[idx]?.ref;
        }
      },
      registerRef: (name: string) => (ref: any) => {
        const idx = refs.current.findIndex((r) => r.name === name);
        if (idx === -1) {
          refs.current.push({ name, ref });
        }
      },
      nextField: () => {
        let indexRef = refs.current.findIndex((x) => x.ref?.isFocused?.());
        indexRef += 1;
        if (indexRef > -1 && indexRef < refs.current.length) {
          refs.current[indexRef].ref?.focus?.();
        } else {
          formRef.current?.handleSubmit?.();
        }
      },
    }),
    [formRef]
  );

  useEffect(
    () => () => {
      refs.current = [];
    },
    []
  );

  return form;
};

export const useRegisterInputRef = (name: string) => {
  const form = useFormContext();

  const setRef = useCallback(
    (_ref?: ForwardedRef<any>) => (ref: any) => {
      if (_ref) {
        if (typeof _ref === 'function') {
          _ref(ref);
        } else if (typeof _ref === 'object') {
          _ref.current = ref;
        }
      }
      if (!!form && name && !!ref) {
        form?.registerRef(name)(ref);
      }
    },
    [form, name]
  );

  return {
    getRef: form?.getRef,
    nextField: form?.nextField,
    setRef,
  };
};

export const useField = (name: string) => {
  const [field, meta, helpers] = useFormikField(name);
  const form = useFormContext();

  const handleFocus = useCallback(() => {
    if (!form || !name) {
      return;
    }
    const ref = form?.getRef(name);
    if (ref?.focus) {
      ref.focus?.();
    }
  }, [name, form]);

  return { field, meta, helpers, handleFocus };
};
