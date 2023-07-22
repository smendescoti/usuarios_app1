import * as CryptoJS from 'crypto-js';

//chave secreta
const secretKey = '798392a2-c713-4f10-bee7-a379730f4351';

//função para realizar a criptografia de um valor
export function encrypt(data: string): string {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
}

//função para descriptografar um valor
export function decrypt(data: string): string {
    return CryptoJS.AES.decrypt(data, secretKey)
        .toString(CryptoJS.enc.Utf8);
}
