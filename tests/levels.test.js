const levels = require('../client/levels.js');

describe('Test Game Levels', () => {

  test('Levels object should be defined', () => {
    expect(levels).toBeDefined();
  });

  test('Levels.default should be an array with length of 2', () => {
    expect(levels.default).toHaveLength(2);
  });

  test('Each level object should have an "englishWords" array and "spanishWords" object as a property', () => {
    levels.default.forEach((level) => {
      expect(level.englishWords).toBeDefined();
      expect(Array.isArray(level.englishWords)).toBe(true);
      expect(level.spanishWords).toBeDefined();
      expect(typeof level.spanishWords === 'object').toBe(true);
    })
  })

});
