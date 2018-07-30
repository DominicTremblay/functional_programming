const _ = require("lodash");

const products = [
  {
    id: 1,
    name: "Art piece",
    price: 5000,
    quantity: 1,
    category: "Art"
  },
  {
    id: 2,
    name: "Watch",
    price: 500,
    quantity: 10,
    category: "Jewelry"
  },
  {
    id: 3,
    name: "Bracelet",
    price: 1000,
    quantity: 5,
    category: "Jewelry"
  },
  {
    id: 4,
    name: "Antique Clock",
    price: 10000,
    quantity: 1,
    category: "Antiquity"
  },
  {
    id: 5,
    name: "Drone",
    price: 300,
    quantity: 50,
    category: "Electronics"
  },
  {
    id: 6,
    name: "Refrigerator",
    price: 900,
    quantity: 30,
    category: "Appliances"
  },
  {
    id: 7,
    name: "Washing Machine",
    price: 1200,
    quantity: 10,
    category: "Appliances"
  },
  {
    id: 8,
    name: "Computer",
    price: 3000,
    quantity: 20,
    category: "Electronics"
  },
  {
    id: 9,
    name: "Camera",
    price: 800,
    quantity: 40,
    category: "Electronics"
  },
  {
    id: 10,
    name: "Microwave",
    price: 500,
    quantity: 35,
    category: "Appliances"
  }
];

const electronicsCat = product => product.category === "Electronics";
const productTotal = product => product.quantity * product.price;
const totalInventory = (total, next) => (total += next);

// Native JS Functions
const inventory = products
  .filter(electronicsCat)
  .map(productTotal)
  .reduce(totalInventory, 0);

console.log(inventory);

// Lodash
const _inventory = _
  .filter(products, electronicsCat)
  .map(productTotal)
  .reduce(totalInventory);

console.log(_inventory);
