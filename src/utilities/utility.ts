import * as crypto from 'crypto-js';

/**
 * To validate password / Have at least 8 Characters
 * A combination of uppercase, lowercase, number and symbol
 * @param {string} password
 * @return {*}
 */
export const validatePassword = (password: string) => {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*()_+-]).{8,}$/;
  return pattern.test(password);
};

/**
 * Decrypt the password that FE gave
 * @param {string} value encrypted password
 * @param {string} key encryptionKey
 * @return {*}  {string}
 */
export const decrypt = (value: string, key: string): string => {
  const decrypted = crypto.AES.decrypt(value, key);
  const decryptedValue = decrypted.toString(crypto.enc.Utf8);
  return decryptedValue;
};
