import { capitalize } from "./function.js";
test('capitalizes the first letter', () => {
    expect(capitalize('hello').toBe('Hello'));
});

import { reverseString } from "./function.js";
test('reverses a string', () => {
    expect(reverseString('hello').toBe('olleh'));
});