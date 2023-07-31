import { capitalize, reverseString, calculator, ceasarCipher, analyzeArray } from './script';

describe('Capitalize the first letter of a string', () => {
  test("capitalize('string')", () => {
    expect(capitalize('string')).toBe('String');
  });
});

describe('Reverse string', () => {
  test("reverseString('string')", () => {
    expect(reverseString('string')).toBe('gnirts');
  });
});

describe('Calculator', () => {
  test('calculator().add(1, 2)', () => {
    expect(calculator().add(1, 2)).toBe(3);
  });
  test('calculator().add(1, -2)', () => {
    expect(calculator().add(1, -2)).toBe(-1);
  });
  test('calculator().substract(2, 1)', () => {
    expect(calculator().substract(2, 1)).toBe(1);
  });
  test('calculator().substract(1, -2)', () => {
    expect(calculator().substract(1, -2)).toBe(3);
  });
  test('calculator().substract(-2, -2)', () => {
    expect(calculator().substract(-2, -2)).toBe(0);
  });
  test('calculator().divide(4, 2)', () => {
    expect(calculator().divide(4, 2)).toBe(2);
  });
  test('calculator().divide(2, 3)', () => {
    expect(calculator().divide(2, 3)).toBe(0.67);
  });
  test('calculator().multiply(2, 3)', () => {
    expect(calculator().multiply(2, 3)).toBe(6);
  });
  test('calculator().multiply(2, -3)', () => {
    expect(calculator().multiply(2, -3)).toBe(-6);
  });
});

describe("Ceasar's cipher", () => {
  test("ceasarCipher(1, 'This is, Aa string with zZ!')", () => {
    expect(ceasarCipher(1, 'This is, Aa string with zZ!')).toBe('Uijt jt, Bb tusjoh xjui aA!');
  });
  test("ceasarCipher(4, 'This is, Aa string with zZ!')", () => {
    expect(ceasarCipher(4, 'This is, Aa string with zZ!')).toBe('Xlmw mw, Ee wxvmrk amxl dD!');
  });
  test("ceasarCipher(30, 'This is, Aa string with zZ!')", () => {
    expect(ceasarCipher(30, 'This is, Aa string with zZ!')).toBe('Xlmw mw, Ee wxvmrk amxl dD!');
  });
  test("ceasarCipher(-1, 'Uijt jt, Bb tusjoh xjui aA!')", () => {
    expect(ceasarCipher(-1, 'Uijt jt, Bb tusjoh xjui aA!')).toBe('This is, Aa string with zZ!');
  });
  test("ceasarCipher(-4, 'Xlmw mw, Ee wxvmrk amxl dD!')", () => {
    expect(ceasarCipher(-4, 'Xlmw mw, Ee wxvmrk amxl dD!')).toBe('This is, Aa string with zZ!');
  });
  test("ceasarCipher(-30, 'Xlmw mw, Ee wxvmrk amxl dD!')", () => {
    expect(ceasarCipher(-30, 'Xlmw mw, Ee wxvmrk amxl dD!')).toBe('This is, Aa string with zZ!');
  });
  test("ceasarCipher(-1, 'This is, Aa string with zZ!')", () => {
    expect(ceasarCipher(-1, 'This is, Aa string with zZ!')).toBe('Sghr hr, Zz rsqhmf vhsg yY!');
  });
});

describe('Analyze array', () => {
  test('analyzeArray([1,8,3,4,2,6])', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
  });
});
