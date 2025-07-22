import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  Button,
  ButtonText,
  Text,
} from '../gluestack-ui';
import { useStyleContext } from '@gluestack-ui/nativewind-utils/withStyleContext';
import React, {
  ComponentProps,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { FormControlContext } from '../../context/form';
import { useField, useRegisterInputRef } from '@pkgs/hooks';
import DateTimePicker, {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { View } from '../react-native';
import dayjs from 'dayjs';
import { omit } from 'lodash';

const SCOPE = 'INPUT';

const inputDateFieldStyle = tva({
  base: 'flex-1 text-typography-900 py-[6px] px-3 h-full web:cursor-text web:data-[disabled=true]:cursor-not-allowed',

  parentVariants: {
    variant: {
      underlined: 'web:outline-0 web:outline-none px-0',
      outline: 'web:outline-0 web:outline-none',
      rounded: 'web:outline-0 web:outline-none px-4',
    },

    size: {
      '2xs': 'text-2xs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    hasValue: {
      true: 'text-typography-900',
      false: 'text-typography-500',
    },
  },
});

type IInputFieldProps = React.ComponentProps<typeof Text> &
  VariantProps<typeof inputDateFieldStyle> & {
    className?: string;
    type?: 'date' | 'time' | 'datetime';
    onChange?: (event: DateTimePickerEvent, date?: Date) => void;
    dateTimePickerProps?: ComponentProps<typeof DateTimePicker>;
    placeholder?: string;
    format?: string;
  };

const InputDateField = React.forwardRef<
  React.ComponentRef<typeof Text>,
  IInputFieldProps
>(function InputField(
  {
    className,
    type = 'date',
    onChange: defaultOnChange,
    dateTimePickerProps,
    placeholder = 'Pilih Tanggal',
    format = type === 'datetime'
      ? 'D MMMM YYYY, HH:mm'
      : type === 'date'
        ? 'D MMMM YYYY'
        : 'HH:mm',
    ...props
  },
  ref
) {
  const { variant: parentVariant, size: parentSize } = useStyleContext(SCOPE);
  const name = useContext(FormControlContext) ?? '';
  const { setRef } = useRegisterInputRef(name);
  const { field, helpers } = useField(name);
  const [show, setShow] = React.useState(false);
  const [showAndroid, setShowAndroid] = React.useState(false);
  const defaultMode = type === 'datetime' ? 'date' : type;
  const [mode, setMode] = React.useState<'date' | 'time'>(defaultMode);
  const defaultValue = useMemo(() => {
    if (field.value) {
      return new Date(field.value);
    }
    return new Date();
  }, [field.value]);
  const [value, setValue] = React.useState<Date | undefined>(defaultValue);

  const formatedValue = useMemo(() => {
    if (value) {
      return dayjs(value).format(format);
    }
    return '';
  }, [value, format]);

  const onChange = useCallback(
    (e: DateTimePickerEvent, date?: Date) => {
      if (e.type === 'set') {
        if (
          Platform.OS === 'android' &&
          type === 'datetime' &&
          mode === 'date'
        ) {
          setMode('time');
          setValue(date);
          return;
        } else {
          if (Platform.OS === 'android') {
            setValue(date);
            helpers?.setTouched(true);
            helpers?.setValue(date?.toJSON());
          } else {
            setValue(date);
          }
          defaultOnChange?.(e, date);
        }
      }
      if (Platform.OS === 'android') {
        setMode(defaultMode);
        setShowAndroid(false);
      }
    },
    [type, mode, helpers, defaultOnChange, defaultMode]
  );

  const handleOpenDatePicker = useCallback(() => {
    if (Platform.OS === 'android') {
      setShowAndroid(true);
    } else {
      setShow(true);
    }
  }, []);

  const handleOk = useCallback(() => {
    if (type === 'datetime' && mode === 'date') {
      setMode('time');
    } else {
      setMode(defaultMode);
      setShow(false);
      helpers?.setTouched(true);
      helpers?.setValue(value?.toJSON());
    }
  }, [type, mode, defaultMode, helpers, value]);

  const handleCancel = useCallback(() => {
    setShow(false);
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (Platform.OS === 'android' && showAndroid) {
      DateTimePickerAndroid.open({
        ...omit(dateTimePickerProps, ['display', 'minuteInterval']),
        value: value as Date,
        mode,
        onChange,
      });
    }
  }, [dateTimePickerProps, mode, onChange, showAndroid, type, value]);

  return (
    <>
      <Text
        ref={setRef(ref)}
        {...props}
        onPress={handleOpenDatePicker}
        className={inputDateFieldStyle({
          parentVariants: {
            variant: parentVariant,
            size: parentSize,
            hasValue: !!value,
          },
          class: className,
        })}
      >
        {formatedValue || placeholder}
      </Text>
      <Actionsheet isOpen={show} closeOnOverlayClick={false}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <DateTimePicker
            {...dateTimePickerProps}
            display="spinner"
            value={value as Date}
            mode={mode}
            onChange={onChange}
          />
          <View className="mx-4 flex-row gap-4 self-end">
            <Button variant="link" onPress={handleCancel} className="flex-1">
              <ButtonText className="text-typography-700">CANCEL</ButtonText>
            </Button>
            <Button variant="link" onPress={handleOk} className="flex-1">
              <ButtonText>OK</ButtonText>
            </Button>
          </View>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
});

export { InputDateField };
