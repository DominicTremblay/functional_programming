const R = require("ramda");

const double = n => n * 2;

const square = n => Math.sqrt(n);

console.log(double(square(49))); // 14

const pipeline = [square, double];
const result = pipeline.reduce((total, func) => {
  return func(total);
}, 49);

const pipe = (...fcts) => initialValue =>
  fcts.reduce((value, func) => func(value), initialValue);

const doubleSquare = pipe(
  square,
  double
);

console.log(doubleSquare(49));
