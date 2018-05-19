const palindrome = require('./index');

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"saippuakauppias" is a palindrome', () => {
  expect(palindrome('saippuakauppias')).toBeTruthy();
});

test('"scbhbc" is a palindrome', () => {
    expect(palindrome('cbhbc')).toBeTruthy();
  });

test('"121212121" is a palindrome', () => {
    expect(palindrome('121212121')).toBeTruthy();
  });

test('"Heippa vaan!" is not a palindrome', () => {
    expect(palindrome('Heippa vaan!')).toBeFalsy();
  });

test('"92089" is not a palindrome', () => {
    expect(palindrome('92089')).toBeFalsy();
  });