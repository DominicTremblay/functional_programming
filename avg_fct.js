// Does this function have a single purpose?

const sum = numbers => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const round = number => Math.round(number * 100) / 100;

const average = numbers => Math.round(sum(numbers)) / numbers.length;

console.log(average([5, 7, 6, 0, 3, 9, 8, 1]));
