
const NUM_TO_ROMAN_SYMBOL = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

function convertToRoman(value) {
  let maxSymbolValue = 1000;
  let midSymbolValue = maxSymbolValue / 2;
  let unitSymbolValue = maxSymbolValue / 10;

  let currentValue = value;
  let romanValue = '';

  while (currentValue > 0) {
    if (currentValue >= maxSymbolValue) {
      romanValue += NUM_TO_ROMAN_SYMBOL[maxSymbolValue];
      currentValue -= maxSymbolValue;
    } else if (currentValue >= maxSymbolValue - unitSymbolValue) {
      romanValue += NUM_TO_ROMAN_SYMBOL[unitSymbolValue] + NUM_TO_ROMAN_SYMBOL[maxSymbolValue];
      currentValue -= (maxSymbolValue - unitSymbolValue);
    } else if (currentValue >= midSymbolValue) {
      romanValue += NUM_TO_ROMAN_SYMBOL[midSymbolValue];
      currentValue -= midSymbolValue;
    } else if (currentValue >= midSymbolValue - unitSymbolValue) {
      romanValue += NUM_TO_ROMAN_SYMBOL[unitSymbolValue] + NUM_TO_ROMAN_SYMBOL[midSymbolValue];
      currentValue -= (midSymbolValue - unitSymbolValue);
    } else if (currentValue >= unitSymbolValue) {
      romanValue += NUM_TO_ROMAN_SYMBOL[unitSymbolValue];
      currentValue -= unitSymbolValue;
    } else {
      maxSymbolValue /= 10;
      midSymbolValue /= 10;
      unitSymbolValue /= 10;
    }
  }

  return romanValue;
}

module.exports = convertToRoman;
