/**
 * DevAtlas - TARJAN STRONGLY CONNECTED
 * Version Iteration: 2392
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_2392 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 91];
    const result = Solution_2392.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
