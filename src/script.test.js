import { capitalize, reverseString, calculator, ceasarCipher } from './script';

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

describe("Ceasar's cipher", () => {
  test("Ceasar's cipher - cipher: 1, 'This is, A string with zZ!'", () => {
    expect(ceasarCipher(1, 'This is, Aa string with zZ!')).toBe('Uijt jt, Bb tusjoh xjui aA!');
  });
  test("Ceasar's cipher - cipher: 4, 'This is, A string with zZ!'", () => {
    expect(ceasarCipher(4, 'This is, Aa string with zZ!')).toBe('Xlmw mw, Ee wxvmrk amxl dD!');
  });
  test("Ceasar's cipher - cipher: 30, 'This is, A string with zZ!'", () => {
    expect(ceasarCipher(30, 'This is, Aa string with zZ!')).toBe('Xlmw mw, Ee wxvmrk amxl dD!');
  });
  test("Ceasar's cipher - deCipher: -1, 'Uijt jt, B tusjoh xjui aA!'", () => {
    expect(ceasarCipher(-1, 'Uijt jt, Bb tusjoh xjui aA!')).toBe('This is, Aa string with zZ!');
  });
  test("Ceasar's cipher - deCipher: -4, 'Xlmw mw, E wxvmrk amxl dD!'", () => {
    expect(ceasarCipher(-4, 'Xlmw mw, Ee wxvmrk amxl dD!')).toBe('This is, Aa string with zZ!');
  });
  test("Ceasar's cipher - deCipher: -30, 'Xlmw mw, E wxvmrk amxl dD!'", () => {
    expect(ceasarCipher(-30, 'Xlmw mw, Ee wxvmrk amxl dD!')).toBe('This is, Aa string with zZ!');
  });
  test("Ceasar's cipher - deCipher: -1, 'This is, Aa string with zZ!'", () => {
    expect(ceasarCipher(-1, 'This is, Aa string with zZ!')).toBe('Sghr hr, Zz rsqhmf vhsg yY!');
  });
});
