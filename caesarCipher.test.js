const caesarCipher = require('./caesarCipher');

test('Shift a character', () => {
  expect(caesarCipher('a', 1)).toBe('b');
});

test('Shift multiple characters', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('Wraps past z', () => {
  expect(caesarCipher('z', 1)).toBe('a');
});

test('Apply a negative shift', () => {
  expect(caesarCipher('bcd', -1)).toBe('abc');
});

test('Shift factor of 26 returns same string', () => {
  expect(caesarCipher('abc', 26)).toBe('abc');
});

test('Handle spaces', () => {
  expect(caesarCipher('def abc qrs', 1)).toBe('efg bcd rst');
});
