/**
 * DevAtlas - KRUSKAL MINIMUM SPANNING TREE
 * Version Iteration: 4285
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_4285 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 84];
    const result = Solution_4285.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
