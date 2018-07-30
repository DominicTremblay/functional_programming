const R = require("ramda");

// const add = a => b => c => a + b + c;

const curriedAdd = R.curry((a, b, c) => a + b + c);

const add5 = curriedAdd(3, 2);

console.log(add5(5));

const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
// const ids = items.map(obj => obj.id);

const getProperty = R.curry((property, obj) => obj[property]);
const ids = items.map(getProperty("id"));

console.log(ids);
