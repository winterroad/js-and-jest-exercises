const fizzbuzz = require('./index');

test('fizzbuzz function is defined', () => {
  expect(fizzbuzz).toBeDefined();
});

test('Calling fizzbuzz with 10 prints out 10 statements', () => {
  fizzbuzz(10);
  expect(console.log.mock.calls.length).toEqual(10);
});

test('Calling fizzbuzz with 20 prints out the correct values', () => {
  fizzbuzz(20);

  expect(console.log.mock.calls[0][0]).toEqual(1);
  expect(console.log.mock.calls[1][0]).toEqual(2);
  expect(console.log.mock.calls[2][0]).toEqual('fizz');
  expect(console.log.mock.calls[3][0]).toEqual(4);
  expect(console.log.mock.calls[4][0]).toEqual('buzz');
  expect(console.log.mock.calls[5][0]).toEqual('fizz');
  expect(console.log.mock.calls[6][0]).toEqual(7);
  expect(console.log.mock.calls[7][0]).toEqual(8);
  expect(console.log.mock.calls[8][0]).toEqual('fizz');
  expect(console.log.mock.calls[9][0]).toEqual('buzz');
  expect(console.log.mock.calls[10][0]).toEqual(11);
  expect(console.log.mock.calls[11][0]).toEqual('fizz');
  expect(console.log.mock.calls[12][0]).toEqual(13);
  expect(console.log.mock.calls[13][0]).toEqual(14);
  expect(console.log.mock.calls[14][0]).toEqual('fizzbuzz');
  expect(console.log.mock.calls[15][0]).toEqual(16);
  expect(console.log.mock.calls[16][0]).toEqual(17);
  expect(console.log.mock.calls[17][0]).toEqual('fizz');
  expect(console.log.mock.calls[18][0]).toEqual(19);
  expect(console.log.mock.calls[19][0]).toEqual('buzz');
});

/* jest.spyOn(object, methodName)
Creates a mock function similar to jest.fn but also tracks calls to object[methodName]. Returns a Jest mock function.
Note: By default, jest.spyOn also calls the spied method. 
When you want to overwrite the original function, you can use jest.spyOn(object, methodName).mockImplementation(() 
=> customImplementation) */
/* mockFn.mockImplementation(fn)
Accepts a function that should be used as the implementation of the mock. The mock itself will still record all calls that go into and instances that come from itself – the only difference is that the implementation will also be executed when the mock is called. */

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

/* Removes the mock and restores the initial implementation.
mockFn.mockRestore only works when mock was created with jest.spyOn. */

afterEach(() => {
  console.log.mockRestore();
});