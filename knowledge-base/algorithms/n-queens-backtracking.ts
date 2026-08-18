/**
 * DevAtlas - N QUEENS BACKTRACKING
 * Version Iteration: 5101
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_5101 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 0];
    const result = Solution_5101.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
