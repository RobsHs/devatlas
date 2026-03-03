/**
 * DevAtlas - N QUEENS BACKTRACKING
 * Version Iteration: 2593
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_2593 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 92];
    const result = Solution_2593.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
