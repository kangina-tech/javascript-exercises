const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  const arr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return arr;
};

const multiply = function(arr) {
 return arr.reduce((prod, num) => prod * num);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if(num === 0) {
    return 1;
  }
  let answer = 1;
  for(let i = num; i > 0; i--) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
