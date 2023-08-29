const reverseString = require('./reverseString');

test.skip('Reverses string', () => {
  expect(reverseString('abcdefg')).toBe('gfedcba');
});
