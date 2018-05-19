const maxChar = require('./index');

test('maxChar function exists', () => {
    expect(maxChar).toBeDefined();
  });

test('maxChar handles empty input', () => {
    expect(maxChar("")).toEqual("");
  });

test('String\'s "llloo009876lllll54" maxChar is "l', () => {
    expect(maxChar('llloo009876lllll54')).toEqual('l');
  });

test('String\'s "       pp" maxChar is " "', () => {
    expect(maxChar('       pp')).toEqual(' ');
  });

test('String\'s "1234566" maxChar is "6"', () => {
    expect(maxChar('1234566')).toEqual('6');
  });
