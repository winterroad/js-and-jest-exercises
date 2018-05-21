const anagrams = require('./index.js');

test('anagrams function exists', () => {
  expect(typeof anagrams).toEqual('function');
});

test('"talouspolitiikka" is an anagram of "tulo pois kaikilta"', () => {
  expect(anagrams('talouspolitiikka', 'tulo pois kaikilta')).toBeTruthy();
});

test('"Mauno Henrik Koivisto" is an anagram of "arvoitus koko ihminen"', () => {
    expect(anagrams('Mauno Henrik Koivisto', 'arvoitus koko ihminen')).toBeTruthy();
  });

test('"silakka makoisa" is not an anagram of "salakavala maku"', () => {
    expect(anagrams('silakka makoisa', 'salakavala maku')).toBeFalsy();
});

test('"hillotolppa" is not an anagram of "hollitupa"', () => {
    expect(anagrams('hillotolppa', 'hollitupa')).toBeFalsy();
});