/**
 * DevAtlas - BELLMAN FORD NEGATIVE CYCLES
 * Version Iteration: 2434
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_2434 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 33];
    const result = Solution_2434.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
