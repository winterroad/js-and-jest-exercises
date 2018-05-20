const chunk = require('./index');

test('function chunk exists', () => {
  expect(typeof chunk).toEqual('function');
});

test('chunk divides an array of 12 elements with chunk size 4', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const chunked = chunk(arr, 4);

  expect(chunked).toEqual([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]);
});

test('chunk divides an array of 16 elements with chunk size 6', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const chunked = chunk(arr, 6);

  expect(chunked).toEqual([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16]]);
});

test('chunk divides an empty array with chunk size 5', () => {
  const arr = [];
  const chunked = chunk(arr, 5);

  expect(chunked).toEqual([]);
});


test('chunk divides an array of 10 elements with chunk size 1', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk(arr, 1);

  expect(chunked).toEqual([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]);
});
