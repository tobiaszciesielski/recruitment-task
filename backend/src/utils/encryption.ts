import { secretKey } from "../config";

export function encode(mess: string, key = secretKey): string {
  let encrypted = "";
  let xorResult = 0;
  for (let i = 0; i < mess.length; i++) {
    xorResult = mess.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    encrypted += String.fromCharCode(xorResult);
  }
  return Buffer.from(encrypted).toString("base64");
}

export function decode(encoded: string, key = secretKey): string {
  const pureEncoded = Buffer.from(encoded, "base64").toString();
  let decoded = "";
  let xorResult = 0;
  for (let i = 0; i < pureEncoded.length; i++) {
    xorResult = pureEncoded.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    decoded += String.fromCharCode(xorResult);
  }
  return decoded;
}

export function createToken(id: string): string {
  return encode(id)
}

export function decodeToken(token: string): string {
  return decode(token)
}

