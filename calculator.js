function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

module.exports = {add, subtract, sum}