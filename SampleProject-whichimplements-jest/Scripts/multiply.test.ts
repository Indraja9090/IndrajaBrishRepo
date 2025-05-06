import { multiply } from './multiply';

test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('multiplies 5 * 0 to equal 0', () => {
  expect(multiply(5, 0)).toBe(0);
});
