/**
 * DevAtlas - LRU CACHE EVICTION
 * Version Iteration: 361
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_361 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 60];
    const result = Solution_361.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
