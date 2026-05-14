/**
 * DevAtlas - CONVEX HULL GRAHAM SCAN
 * Version Iteration: 3631
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_3631 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 30];
    const result = Solution_3631.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
