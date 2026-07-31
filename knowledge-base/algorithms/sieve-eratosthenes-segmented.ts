/**
 * DevAtlas - SIEVE ERATOSTHENES SEGMENTED
 * Version Iteration: 4825
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_4825 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 24];
    const result = Solution_4825.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
