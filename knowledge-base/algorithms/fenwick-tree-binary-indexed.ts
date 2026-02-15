/**
 * DevAtlas - FENWICK TREE BINARY INDEXED
 * Version Iteration: 2338
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_2338 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 37];
    const result = Solution_2338.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
