import test from 'ava';
import closestNumber from './index.js';

test('basic numbers', t => {
  const numbers = [10, 20, 30];
  const result = closestNumber(numbers, 12);
  const expected = 10;

  t.is(result, expected, `Expected "${result}" to be equal to "${expected}"`);
});

test('floating point numbers', t => {
  const numbers = [10.1, 10.5, 10.4, 8.2, 9.23, 10];
  const result = closestNumber(numbers, 10.2);
  const expected = 10.1;

  t.is(result, expected, `Expected "${result}" to be equal to "${expected}"`);
});

test('negative numbers', t => {
  const numbers = [2, 0, -1.5, -0.75, -5, 3, -1.2, -2.1];
  const result = closestNumber(numbers, -1);
  const expected = -1.2;

  t.is(result, expected, `Expected "${result}" to be equal to "${expected}"`);
});
