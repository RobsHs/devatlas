/**
 * DevAtlas - SUDOKU SOLVER CONSTRAINT
 * Version Iteration: 1054
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_1054 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 53];
    const result = Solution_1054.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
