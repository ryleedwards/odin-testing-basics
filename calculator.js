const calculator = (() => {
  const add = (x, y) => {
    return x + y;
  };

  const subtract = (x, y) => {
    return x - y;
  };

  const multiply = (x, y) => {
    return x * y;
  };

  const divide = (x, y) => {
    if (y === 0) {
      throw new Error('Cannot divide by zero');
    } else return x / y;
  };

  return { add, subtract, multiply, divide };
})();

module.exports = calculator;
