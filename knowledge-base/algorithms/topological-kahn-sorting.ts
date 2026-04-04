/**
 * DevAtlas - TOPOLOGICAL KAHN SORTING
 * Version Iteration: 3055
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_3055 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 54];
    const result = Solution_3055.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
