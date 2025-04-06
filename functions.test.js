import { capitalize } from "./function.js";
test('capitalizes the first letter', () => {
    expect(capitalize('hello').toBe('Hello'));
});