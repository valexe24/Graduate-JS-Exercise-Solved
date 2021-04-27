const sortArray = require('.');

describe('sortArray', () => {
  it('returns an empty array if the input is empty', () => {
    expect(sortArray([])).toEqual([]);
  });

  it('throws a TypeError when the input is not an Array of integers', () => {
    expect(() => sortArray('string')).toThrowError(TypeError);
    expect(() => sortArray(123)).toThrowError(TypeError);
    expect(() => sortArray(true)).toThrowError(TypeError);
    expect(() => sortArray({})).toThrowError(TypeError);
    expect(() => sortArray(['asd', 'ttt'])).toThrowError(TypeError);
    expect(() => sortArray(['asd', 123, 'ttt'])).toThrowError(TypeError);
  });

  it('sorts an Array of integers correctly', () => {
    const arrStub = [12, 21, -3, 14, 5, 62, 9, -12, 1, -3, 62];
    const expectedResult = [-12, -3, -3, 1, 5, 9, 12, 14, 21, 62, 62];

    expect(sortArray(arrStub)).toEqual(expectedResult);
  });
});
