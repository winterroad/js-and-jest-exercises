const capitalize = require('./index');

test('Capitalize is a function', () => {
  expect(typeof capitalize).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize('millainen sää on ulkona?')).toEqual(
    'Millainen Sää On Ulkona?'
  );
});

test('capitalizes the first letter of every word in a sentence', () => {
    expect(capitalize('tämä on toinen lause, jonka sisältöä muokataan.')).toEqual(
      'Tämä On Toinen Lause, Jonka Sisältöä Muokataan.'
    );
  });