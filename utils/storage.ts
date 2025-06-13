import { isEmpty, isNull, get as lodashGet } from 'lodash';
import { decrypt, encrypt } from './encryption';
import AsyncStorage from '@react-native-async-storage/async-storage';

const isDevelopment =
  lodashGet(process, 'env.APP_ENV', 'development') !== 'production';

const set = async (key: string, value: any, encrypted = !isDevelopment) => {
  let _value = value;
  if (typeof value !== 'string') {
    _value = JSON.stringify(_value);
  }
  if (encrypted) {
    _value = encrypt(_value);
  }
  await AsyncStorage.setItem(key, _value as string);
};
const get = async (key: string, encrypted = !isDevelopment): Promise<any> => {
  try {
    let _value = await AsyncStorage.getItem(key);
    if (_value && encrypted) {
      _value = decrypt(_value);
    }
    if (!isEmpty(_value) && !isNull(_value)) {
      _value = JSON.parse(_value ?? '');
    }
    return _value;
  } catch (e: unknown) {
    console.info(e);
  }
};
const remove = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

export const storage = {
  set,
  get,
  remove,
};
