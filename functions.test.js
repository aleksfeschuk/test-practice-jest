import { capitalize } from "./function.js";
test('capitalizes the first letter', () => {
    expect(capitalize('hello').toBe('Hello'));
});

import { reverseString } from "./function.js";
test('reverses a string', () => {
    expect(reverseString('hello').toBe('olleh'));
});

import { calculator } from "./function.js";
test('calculator operations', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.multiply(2, 4)).toBe(8);
});

import { caesarCipher } from "./function.js";
test('caesar cipher shifts correctly', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('Hello', 3)).toB('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog');
});

export function analyzeArray(arr) {
    return {
        average: arr.reduce((sum, num) => sum + num, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
}