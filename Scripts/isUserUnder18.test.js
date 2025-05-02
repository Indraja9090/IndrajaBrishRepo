const filterAdults = require('./isUserUnder18');

test('filters out users below age 18', () => {
  const users = [
    { name: 'Ravi', age: 17 },
    { name: 'Sita', age: 22 },
    { name: 'Gita', age: 15 },
    { name: 'Mohan', age: 19 }
  ];
  const result = filterAdults(users);
  expect(result).toEqual([
    { name: 'Sita', age: 22 },
    { name: 'Mohan', age: 19 }
  ]);
});