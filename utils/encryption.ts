import CryptoES from 'crypto-es';
import { get } from 'lodash';

const aesOptions = {
  mode: CryptoES.mode.CBC,
  padding: CryptoES.pad.Pkcs7,
};

const defaultSecret = get(process, 'env.EXPO_PUBLIC_SECRET_KEY', '');

export const encrypt = (data: string, secret = defaultSecret) =>
  CryptoES.AES.encrypt(data, secret, aesOptions).toString();

export const decrypt = (data: string, secret = defaultSecret) =>
  CryptoES.enc.Utf8.stringify(CryptoES.AES.decrypt(data, secret, aesOptions));
