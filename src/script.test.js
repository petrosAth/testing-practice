import { capitalize, reverseString } from './script';

test('Capitalize the first letter of a string', () => {
  expect(capitalize('string')).toBe('String');
});

test('Reverse string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

