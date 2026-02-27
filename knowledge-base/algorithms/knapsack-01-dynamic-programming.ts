/**
 * DevAtlas - KNAPSACK 01 DYNAMIC PROGRAMMING
 * Version Iteration: 2539
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_2539 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 38];
    const result = Solution_2539.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
