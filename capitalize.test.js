const capitalize = require('./capitalize');

test.skip('Returns capitalized string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
