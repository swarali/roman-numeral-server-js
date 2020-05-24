const assert = require('assert');
const { expect } = require('chai');

const convertToRoman = require('../service/romannumeral');

describe('convertToRoman', () => {
  // Test function returns correct value for single digits
  it('should return for digits', () => {
    expect(convertToRoman(1)).eq('I');
    expect(convertToRoman(2)).eq('II');
    expect(convertToRoman(3)).eq('III');
    expect(convertToRoman(4)).eq('IV');
    expect(convertToRoman(5)).eq('V');
    expect(convertToRoman(6)).eq('VI');
    expect(convertToRoman(7)).eq('VII');
    expect(convertToRoman(8)).eq('VIII');
    expect(convertToRoman(9)).eq('IX');
    expect(convertToRoman(10)).eq('X');
  });

  it('should return for roman symbols', () => {
    expect(convertToRoman(50)).eq('L');
    expect(convertToRoman(100)).eq('C');
  });

  it('should return for random values', () => {
    expect(convertToRoman(27)).eq('XXVII');
    expect(convertToRoman(49)).eq('XLIX');
    expect(convertToRoman(123)).eq('CXXIII');
    expect(convertToRoman(192)).eq('CXCII');
    expect(convertToRoman(551)).eq('DLI');
    expect(convertToRoman(2786)).eq('MMDCCLXXXVI');
  });
});
