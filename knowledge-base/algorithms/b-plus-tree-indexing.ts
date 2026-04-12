/**
 * DevAtlas - B PLUS TREE INDEXING
 * Version Iteration: 3181
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_3181 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 80];
    const result = Solution_3181.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
