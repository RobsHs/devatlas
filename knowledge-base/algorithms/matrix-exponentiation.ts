/**
 * DevAtlas - MATRIX EXPONENTIATION
 * Version Iteration: 4645
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_4645 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 44];
    const result = Solution_4645.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
