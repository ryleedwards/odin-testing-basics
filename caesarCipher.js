const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const caesarCipher = (str, shift) => {
  const strArr = _ToArray(str);
  const arrShifted = _shiftChars(strArr, shift);
};

function _ToArray(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.charAt(i));
  }
  return arr;
}

function _shiftChars(arr, shiftKey) {
  const shiftedArr = [];

  //TODO handle spaces

  arr.forEach((char) => {
    // get initial index
    const oldCharIndex = letters.indexOf(char);
    // find new index
    const newCharIndex = (oldCharIndex + shiftKey) % 26;
    // get new char
    const newChar = letters[newCharIndex];
    // push to result array
    shiftedArr.push(newChar);
  });
  return shiftedArr;
}

module.exports = caesarCipher;
