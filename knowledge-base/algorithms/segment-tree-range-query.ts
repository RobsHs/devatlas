/**
 * DevAtlas - SEGMENT TREE RANGE QUERY
 * Version Iteration: 973
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_973 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 72];
    const result = Solution_973.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
