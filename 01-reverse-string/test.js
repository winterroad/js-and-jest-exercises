const reverseInt = require('./index');

test('ReverseInt function exists', () => {
  expect(reverseInt).toBeDefined();
});

test('ReverseInt handles 0 as an input', () => {
  expect(reverseInt(0)).toEqual(0);
});

test('ReverseInt reverses a positive number', () => {
  expect(reverseInt(9)).toEqual(9);
  expect(reverseInt(12)).toEqual(21);
  expect(reverseInt(80)).toEqual(8);
  expect(reverseInt(120410)).toEqual(14021);
});

test('ReverseInt reverses a negative number', () => {
  expect(reverseInt(-2)).toEqual(-2);
  expect(reverseInt(-41)).toEqual(-14);
  expect(reverseInt(-80)).toEqual(-8);
  expect(reverseInt(-120430)).toEqual(-34021);
});