/**
 * DevAtlas - CHINESE REMAINDER THEOREM
 * Version Iteration: 160
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_160 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 59];
    const result = Solution_160.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
