// Does this function have a single purpose?

const average = numbers => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return Math.round((sum / numbers.length) * 100) / 100;
};

console.log(average([5, 7, 6, 0, 3, 9, 8, 1]));
