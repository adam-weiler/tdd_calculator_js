const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = (arr) => arr.reduce((total, num) => total + num, 0);

module.exports = {add, subtract, sum}