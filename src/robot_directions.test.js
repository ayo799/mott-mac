const expect = require('expect');
const directions = require('./robot_directions.js');

beforeAll(() => {
  process.env.NODE_ENV = 'test';
});

it('should be able to check if a coordinate is valid (within the table) or invalid (potentially fall off from the table)', () => {
  let wrongCoordinate = [2, 6];
  expect(directions.isValidCoordinate(wrongCoordinate)).toBeFalsy();
});

it('should not be accepting invalid direction (should not have values other than N, S, E, W)', () => {
  let invalidDirectionCode = 'F';
  expect(directions.isValidDirection(invalidDirectionCode)).toBeFalsy();
});

it('should be getting the correct direction full name (North, South, East, West) given a short code (N, S, E, W', () => {
  let directionCode = 'W';
  expect(directions.getDirectionName(directionCode)).toBe('WEST');
});
