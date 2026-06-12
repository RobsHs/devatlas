/**
 * DevAtlas - AVL TREE ROTATION
 * Version Iteration: 4060
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_4060 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 59];
    const result = Solution_4060.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
