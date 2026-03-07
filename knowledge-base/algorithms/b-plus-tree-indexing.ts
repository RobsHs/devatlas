/**
 * DevAtlas - B PLUS TREE INDEXING
 * Version Iteration: 2653
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_2653 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 52];
    const result = Solution_2653.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
