
const RomanSymbol = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};
const maxSymbol = 1000;
const UPPER_BOUND = maxSymbol * 4 - 1;
const LOWER_BOUND = 1;

function convertToRoman(value) {
  // [max, mid, unit] represent triplets like [X, V, I], [C, L, X]
  let max = maxSymbol;
  let mid = max / 2;
  let unit = max / 10;

  let val = value;
  let romanVal = '';

  while (val > 0) {
    if (val >= max) {
      // For additive notation on max value
      romanVal += RomanSymbol[max];
      val -= max;
    } else if (val >= max - unit) {
      // For subtractive notation on max value
      romanVal += RomanSymbol[unit] + RomanSymbol[max];
      val -= (max - unit);
    } else if (val >= mid) {
      // For additive notation on mid value
      romanVal += RomanSymbol[mid];
      val -= mid;
    } else if (val >= mid - unit) {
      // For subtractive notation on mid value
      romanVal += RomanSymbol[unit] + RomanSymbol[mid];
      val -= (mid - unit);
    } else {
      // Else use unit value as max value
      max = unit;
      mid = max / 2;
      unit = max / 10;
    }
  }

  return romanVal;
}

module.exports = {
  convertToRoman,
  UPPER_BOUND,
  LOWER_BOUND,
};
