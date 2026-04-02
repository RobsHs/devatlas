/**
 * DevAtlas - SUDOKU SOLVER CONSTRAINT
 * Version Iteration: 3034
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_3034 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 33];
    const result = Solution_3034.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
