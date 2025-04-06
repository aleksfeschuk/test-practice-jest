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

