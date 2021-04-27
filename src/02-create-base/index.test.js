const createBase = require('.');

describe('createBase', () => {
  it('returns a function that adds a specified number to the input', () => {
    const addTen = createBase(10);

    expect(addTen(6)).toEqual(16);
    expect(addTen(12)).toEqual(22);
    expect(addTen(-40)).toEqual(-30);
  });
});
