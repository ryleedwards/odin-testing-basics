const calculator = require('./calculator');

test('Add 3 and 4', () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test('Subtract 8 from 13', () => {
  expect(calculator.subtract(13, 8)).toBe(5);
});

test('Multiply 3 and 4', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('Divide 8 and by 2', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test('Divide by zero fails', () => {
  expect(() => {
    calculator.divide(4, 0);
  }).toThrow(Error);
});
