/**
 * DevAtlas - Sorting Algorithms Module
 * Contains verified implementations with complexity benchmarks and step-by-step logic.
 */

const SortingAlgorithms = {
  /**
   * QuickSort: Divide-and-conquer algorithm.
   * Time Complexity: Best O(n log n), Avg O(n log n), Worst O(n^2)
   * Space Complexity: O(log n)
   */
  quickSort(arr) {
    if (arr.length <= 1) return [...arr];
    const array = [...arr];

    function partition(low, high) {
      const pivot = array[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
          i++;
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      [array[i + 1], array[high]] = [array[high], array[i + 1]];
      return i + 1;
    }

    function sort(low, high) {
      if (low < high) {
        const pi = partition(low, high);
        sort(low, pi - 1);
        sort(pi + 1, high);
      }
    }

    sort(0, array.length - 1);
    return array;
  },

  /**
   * MergeSort: Stable divide-and-conquer sorting.
   * Time Complexity: O(n log n) across all cases
   * Space Complexity: O(n)
   */
  mergeSort(arr) {
    if (arr.length <= 1) return [...arr];

    const mid = Math.floor(arr.length / 2);
    const left = this.mergeSort(arr.slice(0, mid));
    const right = this.mergeSort(arr.slice(mid));

    return merge(left, right);

    function merge(lArr, rArr) {
      const result = [];
      let l = 0;
      let r = 0;
      while (l < lArr.length && r < rArr.length) {
        if (lArr[l] <= rArr[r]) {
          result.push(lArr[l++]);
        } else {
          result.push(rArr[r++]);
        }
      }
      return result.concat(lArr.slice(l)).concat(rArr.slice(r));
    }
  },

  /**
   * HeapSort: Comparison-based sorting technique based on Binary Heap.
   * Time Complexity: O(n log n)
   * Space Complexity: O(1) in-place
   */
  heapSort(arr) {
    const array = [...arr];
    const n = array.length;

    function heapify(size, i) {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (left < size && array[left] > array[largest]) largest = left;
      if (right < size && array[right] > array[largest]) largest = right;

      if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        heapify(size, largest);
      }
    }

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      heapify(i, 0);
    }

    return array;
  },

  /**
   * InsertionSort: Efficient for small data sets or partially sorted arrays.
   * Time Complexity: Best O(n), Avg O(n^2), Worst O(n^2)
   * Space Complexity: O(1)
   */
  insertionSort(arr) {
    const array = [...arr];
    for (let i = 1; i < array.length; i++) {
      const key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = key;
    }
    return array;
  },

  /**
   * BubbleSort: Simple comparison-based algorithm with early-exit optimization.
   * Time Complexity: Best O(n), Avg O(n^2), Worst O(n^2)
   * Space Complexity: O(1)
   */
  bubbleSort(arr) {
    const array = [...arr];
    const n = array.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
      if (!swapped) break;
    }
    return array;
  },

  /**
   * CountingSort: Non-comparison integer sorting algorithm.
   * Time Complexity: O(n + k) where k is the range of key values
   * Space Complexity: O(n + k)
   */
  countingSort(arr) {
    if (arr.length === 0) return [];
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const count = new Array(max - min + 1).fill(0);

    for (const num of arr) {
      count[num - min]++;
    }

    const result = [];
    for (let i = 0; i < count.length; i++) {
      while (count[i] > 0) {
        result.push(i + min);
        count[i]--;
      }
    }
    return result;
  }
};

module.exports = SortingAlgorithms;
