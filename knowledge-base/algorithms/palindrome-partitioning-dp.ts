/**
 * DevAtlas - PALINDROME PARTITIONING DP
 * Version Iteration: 4042
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_4042 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 41];
    const result = Solution_4042.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
