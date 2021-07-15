/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is: O(n)
// Explain: All elements are traversed once, irrelevant of their initial state. The function runs at best, average, and worst case, in linear time.

module.exports = function reverseWordsInSentence(input) {
  let auxString;
  let end;
  let begin = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] == ' ' || i == input.length - 1) {
      if (i == input.length - 1 
        && input[i] != ' ') // If the input ends with a space.
        end = i;
      else end = i - 1;

      while (begin < end) {
        auxString = input.toString().split('');
        auxString[begin] = input[end];
        auxString[end] = input[begin];

        input = auxString.join('');
        begin++;
        end--;
      }

      begin = i + 1;
    }
  }

  return input;
};
