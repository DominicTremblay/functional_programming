// Reduce is very poweful

const values = [45, 6, 7, 8, 33, 22, 77];

// Sum of an array

const sum = values.reduce((sum, nextValue) => (sum += nextValue));

// Min or max value of an array

const maxValue = values.reduce(
  (max, nextValue) => (nextValue > max ? nextValue : max)
);

// Average

const average = values.reduce((result, nextValue, index, valuesArr) => {
  return index === valuesArr.length - 1
    ? Math.round((result / valuesArr.length) * 100) / 100
    : (result += nextValue);
});

// Create an object
const letters = "lighthouse in the house";
const countLetters = [...letters].reduce((obj, letter) => {
  obj[letter] = obj[letter] || 0;
  obj[letter] += 1;
  return obj;
}, {});
