const { cursorTo } = require('readline');

const analyzeArray = (arr) => {
  const result = {
    average: _findAverage(arr),
    min: _findMin(arr),
    max: _findMax(arr),
    length: _findLength(arr),
  };
  return result;
};

function _findAverage(arr) {
  const sum = arr.reduce((total, current) => {
    return total + current;
  }, 0);
  return sum / arr.length;
}

function _findMin(arr) {
  const min = Math.min(...arr);
  return min;
}
function _findMax(arr) {
  const max = Math.max(...arr);
  return max;
}
function _findLength(arr) {
  const length = arr.length;
  return length;
}

module.exports = analyzeArray;
