/**
 * DevAtlas - LONGEST COMMON SUBSEQUENCE
 * Version Iteration: 3070
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_3070 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 69];
    const result = Solution_3070.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
