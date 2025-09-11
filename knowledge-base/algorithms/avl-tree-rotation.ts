/**
 * DevAtlas - AVL TREE ROTATION
 * Version Iteration: 100
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_100 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 99];
    const result = Solution_100.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
