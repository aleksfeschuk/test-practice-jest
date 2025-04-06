export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
};

export function caesarCipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return str.split('').map(char => {
        if (!alphabet.includes(char.toLowerCase())) return char;
        const isUpperCase = char === char.toUpperCase();
        const index = alphabet.indexOf(char.toLowerCase());
        const newIndex = (index + shift) % 26;
        const newChar = alphabet[newIndex];
        return isUpperCase ? newChar.toUpperCase() : newChar;
    }).join('');
}

import { analyzeArray } from "./functions.test";
test('analyzes an array', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
        average: 4,
        min: 1, 
        max: 8,
        length: 6,
    });
});