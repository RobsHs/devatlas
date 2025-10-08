/**
 * DevAtlas - FENWICK TREE BINARY INDEXED
 * Version Iteration: 490
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_490 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 89];
    const result = Solution_490.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
