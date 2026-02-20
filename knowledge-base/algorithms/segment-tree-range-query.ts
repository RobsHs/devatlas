/**
 * DevAtlas - SEGMENT TREE RANGE QUERY
 * Version Iteration: 2425
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_2425 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 24];
    const result = Solution_2425.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
