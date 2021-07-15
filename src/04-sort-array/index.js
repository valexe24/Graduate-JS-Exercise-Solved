/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is: O(n log n)
// Explain: The implemented function is a quicksort. More detail at line 73.

module.exports = function sortArray(arr) {
  function swap(items, leftIndex, rightIndex) {
    let auxItem = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = auxItem;
  }
  function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
      index = partition(items, left, right);

      if (left < index - 1) {
        quickSort(items, left, index - 1);
      }

      if (index < right) {
        quickSort(items, index, right);
      }
    }

    return items;
  }

  function bubbleSort(items) {
    let i = 0;
    let j;
    for (i = 0; i < items.length - 1; i++)
      for (j = i + 1; j < items.length; j++)
        if (items[j] < items[i]) swap(items, i, j);

    return items;
  }

  if (Array.isArray(arr)) {
    if (arr == []) return arr;

    if (!arr.every(x => Number.isInteger(x))) throw new TypeError();

  /** LEVEL 1: Library Sort
    Depends on the implementation. Firefox uses merge sort and Chrome uses Timsort. 
    These functions have both an average and worst time complexity of O(n*log n).
    NOTE: I didn't implement type checking with NPM packages since I was going to write the checks myself anyways when doing the QuickSort.
    */
    //return arr.sort();

  /** LEVEL 2: BubbleSort
    This sorting algorithm loops through the array twice, irrelevant of the initial state of the arrays.
    This means that its average and worst time complexities are equal, at O(n^2).
    */
    //return bubbleSort(arr);

  /** LEVEL 3: QuickSort
    This half-baked sorting algorithm combines what I remembered about QuickSort with Google's finest.
    It has the same average time complexity as Timsort (O(n log n)) because of the similar 'divide-and-conquer'
    nature of the sort, and a worst time complexity of O(n^2) in fringe cases where the pivot picked is
    always one of the extremes, such as if the array had already been reverse sorted.
    */
    return quickSort(arr, 0, arr.length - 1);
  } else {
    throw new TypeError();
  }
};
