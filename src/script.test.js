import { capitalize } from './script';

test('Capitalize the first letter of a string.', () => {
  expect(capitalize('string')).toBe('String');
});
