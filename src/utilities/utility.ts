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
export const decrypt = (value: string, key: string, iv: string): string => {
  // Parse key and IV to the correct format
  const parsedKey = crypto.enc.Utf8.parse(key);
  const parsedIv = crypto.enc.Utf8.parse(iv);

  const decryptedBytes = crypto.AES.decrypt(value, parsedKey, {
    iv: parsedIv,
    mode: crypto.mode.CBC,
    padding: crypto.pad.Pkcs7,
  });

  // Convert decrypted bytes to string
  return decryptedBytes.toString(crypto.enc.Utf8);
};
