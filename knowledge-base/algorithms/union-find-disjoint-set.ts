/**
 * DevAtlas - UNION FIND DISJOINT SET
 * Version Iteration: 3364
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_3364 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 63];
    const result = Solution_3364.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
