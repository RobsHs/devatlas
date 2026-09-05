/**
 * DevAtlas - Searching Algorithms Module
 */

const SearchingAlgorithms = {
  /**
   * Linear Search: Check every element until found.
   * Time Complexity: O(n) | Space Complexity: O(1)
   */
  linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
    }
    return -1;
  },

  /**
   * Binary Search: Divides a sorted search interval in half.
   * Time Complexity: O(log n) | Space Complexity: O(1)
   */
  binarySearch(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedArr[mid] === target) return mid;
      if (sortedArr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  },

  /**
   * Jump Search: Jumps ahead by fixed steps (sqrt(n)) then does linear search.
   * Time Complexity: O(sqrt(n)) | Space Complexity: O(1)
   */
  jumpSearch(sortedArr, target) {
    const n = sortedArr.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (sortedArr[Math.min(step, n) - 1] < target) {
      prev = step;
      step += Math.floor(Math.sqrt(n));
      if (prev >= n) return -1;
    }

    while (sortedArr[prev] < target) {
      prev++;
      if (prev === Math.min(step, n)) return -1;
    }

    if (sortedArr[prev] === target) return prev;
    return -1;
  },

  /**
   * Exponential Search: Doubling search range followed by binary search.
   * Time Complexity: O(log n) | Space Complexity: O(1)
   */
  exponentialSearch(sortedArr, target) {
    if (sortedArr.length === 0) return -1;
    if (sortedArr[0] === target) return 0;

    let i = 1;
    while (i < sortedArr.length && sortedArr[i] <= target) {
      i *= 2;
    }

    const left = Math.floor(i / 2);
    const right = Math.min(i, sortedArr.length - 1);

    let l = left;
    let r = right;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (sortedArr[mid] === target) return mid;
      if (sortedArr[mid] < target) l = mid + 1;
      else r = mid - 1;
    }

    return -1;
  }
};

module.exports = SearchingAlgorithms;
