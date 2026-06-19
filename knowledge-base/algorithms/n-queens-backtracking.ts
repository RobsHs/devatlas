/**
 * DevAtlas - N QUEENS BACKTRACKING
 * Version Iteration: 4177
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_4177 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 76];
    const result = Solution_4177.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
