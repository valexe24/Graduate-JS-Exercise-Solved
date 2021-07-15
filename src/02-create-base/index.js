// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is: O(1)
// Explain: Addition and function return are performed in constant time.

module.exports = function createBase(integer) {
  function a(i2) {
    return i2 + integer;
  }
  return a;
};
