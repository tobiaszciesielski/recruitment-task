"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.createToken = exports.decode = exports.encode = void 0;
const config_1 = require("../config");
function encode(mess, key = config_1.secretKey) {
    let encrypted = "";
    let xorResult = 0;
    for (let i = 0; i < mess.length; i++) {
        xorResult = mess.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        encrypted += String.fromCharCode(xorResult);
    }
    return Buffer.from(encrypted).toString("base64");
}
exports.encode = encode;
function decode(encoded, key = config_1.secretKey) {
    const pureEncoded = Buffer.from(encoded, "base64").toString();
    let decoded = "";
    let xorResult = 0;
    for (let i = 0; i < pureEncoded.length; i++) {
        xorResult = pureEncoded.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        decoded += String.fromCharCode(xorResult);
    }
    return decoded;
}
exports.decode = decode;
function createToken(id) {
    return encode(id);
}
exports.createToken = createToken;
function decodeToken(token) {
    return decode(token);
}
exports.decodeToken = decodeToken;
