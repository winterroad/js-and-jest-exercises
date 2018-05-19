const reverseString = require('./index');

test('ReverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('ReverseString reverses "kissa"', () => {
  expect(reverseString('kissa')).toEqual('assik');
});

test('ReverseString reverses a string  "<-tyhjä tila"', () => {
  expect(reverseString('  <-tyhjä tila')).toEqual('alit äjhyt-<  ');
});

  test('ReverseString reverses a string  "Tosi on tosi."', () => {
    expect(reverseString('Tosi on tosi.')).toEqual('.isot no isoT');
});