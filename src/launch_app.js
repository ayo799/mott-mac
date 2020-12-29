#!/usr/bin/env node

const commands = require('./robot_commands.js');

/**
 * To receive input command from user continuously
 */
const readInput = () => {
  let input = process.openStdin();
  let coordinate = [0, 0];
  let direction = '';
  let number = 0;

  input.addListener('data', function(d) {
    let command = d
      .toString()
      .trim()
      .toUpperCase();

    let isValid = commands.isValidCommand(number, command);

    if (isValid) {
      if (commands.isCommandTypeOf('PLACE', command)) {
        [newCoordinateX, newCoordinateY, newDirection, isValid] = commands.execute(command);

        if (isValid) {
          coordinate[0] = newCoordinateX;
          coordinate[1] = newCoordinateY;
          direction = newDirection;
        }
      } else {
        [coordinate, direction] = commands.execute(command, coordinate, direction);
      }

      if (isValid) {
        number++;
      }
    }
  });
};

/**
 * To start this program
 */
const init = () => {
  console.log('\nTOY ROBOT SIMULATOR');
  console.log('Press Ctrl+C to exit');
  console.log('Start typing your commands below:\n');
  readInput();
};

init();
