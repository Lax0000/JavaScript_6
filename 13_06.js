var num1 = 10;
var num2 = 20;
var num3 = 30;

console.log(num1 > num2);
console.log(num1 > num3);

console.log(num1 < num2 && num1 < num3 && num2 < num3);

console.log(num1 > num2 || num1 > num3 || num2 > num3);

console.log(10 > 20 || 10 > 30 || 20 > 30);


var age = 20;



filter();
console.log("Hello");

function filter() {
  console.log("Hi from function filter");
}



// const filter = function () {
//   console.log("function expression");
// };
// filter();

// const filter = () => {
//   console.log("Arrow function");
// };
// filter();
// filter();
// filter();

function addition(num1, num2, num3, num4) {
  console.log(num1 + num2 + num3 + num4);
}
addition(10, 20, 30, 40);

const subtration = function (value1, value2) {
  console.log(value1 - value2);
};
subtration(10, 20);

const multiplication = (v1, v2, v3) => {
  console.log(v1 * v2 * v3);
};
multiplication(1, 2, 3);

// // return

// function greeting(message) {
//   return message;
//   console.log(message, "From inner function");
// }
//  greeting("Hiii");
// console.log(greeting("Hiii"));

// const message = greeting("Hello everyone!");
// console.log(message, "message");

const greeting = () => {
  return "Hello";
};
const message = greeting();
console.log(message, "message");