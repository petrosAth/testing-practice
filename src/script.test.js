import { capitalize, reverseString, calculator } from './script';

test('Capitalize the first letter of a string', () => {
  expect(capitalize('string')).toBe('String');
});

test('Reverse string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

describe('Calculator', () => {
  test('Calculator - Add: 1, +2', () => {
    expect(calculator().add(1, 2)).toBe(3);
  });
  test('Calculator - Add: 1, -2', () => {
    expect(calculator().add(1, -2)).toBe(-1);
  });
  test('Calculator - Substract: 2, -1', () => {
    expect(calculator().substract(2, 1)).toBe(1);
  });
  test('Calculator - Substract: 1, -2', () => {
    expect(calculator().substract(1, -2)).toBe(3);
  });
  test('Calculator - Substract: 2, -2', () => {
    expect(calculator().substract(-2, -2)).toBe(0);
  });
  test('Calculator - divide: 4, 2', () => {
    expect(calculator().divide(4, 2)).toBe(2);
  });
  test('Calculator - divide: 2, 3', () => {
    expect(calculator().divide(2, 3)).toBe(0.67);
  });
  test('Calculator - multiply: 2, 3', () => {
    expect(calculator().multiply(2, 3)).toBe(6);
  });
  test('Calculator - multiply: 2, -3', () => {
    expect(calculator().multiply(2, -3)).toBe(-6);
  });
});
