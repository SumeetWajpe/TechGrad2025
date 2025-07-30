//import Product, { add as Addition, subtract } from "./Math.js";

// console.log("Addition is : " + Addition(5, 3));
// console.log("Subtraction is : " + subtract(5, 3));
// console.log("Multiplication is : " + Product(5, 3));

import * as MathModule from "./Math.js";

console.log("Addition is : " + MathModule.add(5, 3));
console.log("Subtraction is : " + MathModule.subtract(5, 3));
// String Templates
console.log("Multiplication is : " + MathModule.default(5, 3));
console.log(
  `Multiplication is ${MathModule.default(
    10,
    3,
  )} and the addition is  ${MathModule.add(20, 30)}`,
);
