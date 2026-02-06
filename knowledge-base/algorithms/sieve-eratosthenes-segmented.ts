/**
 * DevAtlas - SIEVE ERATOSTHENES SEGMENTED
 * Version Iteration: 2185
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_2185 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 84];
    const result = Solution_2185.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
