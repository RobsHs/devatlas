/**
 * DevAtlas - LRU CACHE EVICTION
 * Version Iteration: 2473
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_2473 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 72];
    const result = Solution_2473.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
