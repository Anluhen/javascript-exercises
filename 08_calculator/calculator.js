const add = function() {
	return arguments[0] + arguments[1]
};

const subtract = function() {
	return arguments[0] - arguments[1]
};

const sum = function(array) {
	return array.reduce(
    (sum, currentValue) => sum + currentValue,
    0)
};

const multiply = function(array) {
  return array.reduce(
    (product, currentValue) => product * currentValue)
};

const power = function() {
	return arguments[0] ** arguments[1]
};

const factorial = function() {
	let i = 1
  let result = 1
  do {
    result *= i
    i++
  } while ( i <= arguments[0])

  return result
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
