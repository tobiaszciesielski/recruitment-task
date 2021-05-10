"use strict";
const { encode, decode } = require('../utils/encryption');
const testKey = 'p@5w0rD';
describe('XOR Cipher', () => {
    test('encodes message properly', () => {
        const encoded = encode('ala ma kota', testKey);
        expect(encoded).toBe('ESxUV10TZBsvQRY=');
    });
    test('decodes message properly', () => {
        const decoded = decode('ESxUV10TZBsvQRY=', testKey);
        expect(decoded).toBe('ala ma kota');
    });
    test.each([
        ['digits',
            "1234567891011121314151617181920",
            'QXIGQwVEc0h5BEcBQ3VCcQZGBENxQXYEQAFKdUlyBQ=='],
        ['punctuation marks',
            "!@#$%^&*()-_=+[{]};:'\",<.>/~`?",
            'UQAWUxUsYlpoHFpvT28rO2gKC0hjUmwJWQ5dOhB/'],
        ['white spaces',
            " \t\n",
            'UEk/']
    ])('works with %s', (title, message, expected) => {
        const encoded = encode(message, testKey);
        expect(encoded).toBe(expected);
    });
    test('works with different keys', () => {
        const message = "I am encyrpted";
        const encoded = encode(message, testKey);
        const encodedWithDifferentKey = encode(message, testKey.toUpperCase());
        expect(encoded).not.toBe(encodedWithDifferentKey);
    });
    test('is key sensitive', () => {
        const message = "aLa mA kOtA";
        const lowerCaseMessage = message.toLowerCase();
        const expected = encode(message, testKey);
        const lowerCaseEncoding = encode(lowerCaseMessage, testKey);
        expect(lowerCaseEncoding).not.toBe(expected);
    });
});
