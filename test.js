var _ = require("lodash");

const cars = [
  {
    make: "Audi",
    model: "Allroad Quattro",
    type: "Small Station Wagons",
    year: 2018
  },
  {
    make: "BMW",
    model: "X5",
    type: "Sport Utility",
    year: 2017
  },
  {
    make: "Porsh",
    model: "Cayenne",
    type: "Sport Utility",
    year: 2018
  },
  {
    make: "Ford",
    model: "Mustang",
    type: "Sport Utility",
    year: 2018
  },
  {
    make: "Dodge",
    model: "Charger",
    type: "Midsize",
    year: 2017
  }
];

// const selection = cars
//   .filter(car => car.year === 2017)
//   .map(car => {
//     return {
//       model: car.make + " " + car.model,
//       type: car.type,
//       year: car.year
//     };
//   })
//   .reduce((acc, next) => {
//     return acc + 1;
//   }, 0);

selection = _.filter(cars, car => car.year === 2017).reduce((acc, next) => {
  return acc + 1;
}, 0);

console.log(selection);
