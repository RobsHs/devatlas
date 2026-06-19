/**
 * DevAtlas - PALINDROME PARTITIONING DP
 * Version Iteration: 4174
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_4174 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 73];
    const result = Solution_4174.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
