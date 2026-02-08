/**
 * DevAtlas - FENWICK TREE BINARY INDEXED
 * Version Iteration: 2206
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_2206 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 5];
    const result = Solution_2206.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
