const levels = require('../client/levels.js');

describe('Test Game Levels File', () => {

  test('Levels object should be defined', () => {
    expect(levels).toBeDefined();
  });

  test('Levels.default should be an array with length of 2', () => {
    expect(levels.default).toHaveLength(2);
  });

});
