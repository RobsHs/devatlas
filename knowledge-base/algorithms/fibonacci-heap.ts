/**
 * DevAtlas - FIBONACCI HEAP
 * Version Iteration: 3982
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_3982 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 81];
    const result = Solution_3982.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
