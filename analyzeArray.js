const { cursorTo } = require('readline');

const analyzeArray = (arr) => {
  const result = {
    average: _findAverage(arr),
    min: null,
    max: null,
    length: null,
  };
  return result;
};

function _findAverage(arr) {
  const sum = arr.reduce((total, current) => {
    return total + current;
  }, 0);
  return sum / arr.length;
}

module.exports = analyzeArray;
