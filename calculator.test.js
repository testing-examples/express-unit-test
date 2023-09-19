const calculator = require('./calculator')

test('calling the endpoint with one number should result in the number itself', () => {
    expect(calculator.calculateSum(1)).toBe(1);
  });

test('calling the endpoint with two nummber should result in the sum of the numbers', () => {
    expect(calculator.calculateSum(4,5)).toBe(8);
  });