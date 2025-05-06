const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(3, 4)).toBe(7);
});

/*
  test() - is global jest function. A synchronous function. 
          It takes 2 parameters. 
                - A samll description about what this test is checking.
                - A callback function which contains the actual test logic.
  expect(value) - also jest global function used to check the value matches your expectation.
  toBe(Expected value) - This matcher function used along with expect() function.  Checks for strict equality (===). 
                       - Used for primitive types (numbers, strings, boolenas etc)
  Syntax : expect(actualValue).matcher(expectedValue)*/