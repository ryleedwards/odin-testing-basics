const analyzeArray = require('./analyzeArray');

const testArr = [1, 8, 3, 4, 2, 6];

const desiredOutput = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

test('Full Object Match', () => {
  expect(analyzeArray(testArr)).toMatchObject(desiredOutput);
});

test('Average', () => {
  expect(analyzeArray(testArr).average).toBe(4);
});
test('Minimum', () => {
  expect(analyzeArray(testArr).min).toBe(1);
});
test('Maximum', () => {
  expect(analyzeArray(testArr).max).toBe(8);
});
test('Length', () => {
  expect(analyzeArray(testArr).length).toBe(6);
});
