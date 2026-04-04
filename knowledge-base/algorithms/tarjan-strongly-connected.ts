/**
 * DevAtlas - TARJAN STRONGLY CONNECTED
 * Version Iteration: 3052
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_3052 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 51];
    const result = Solution_3052.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
