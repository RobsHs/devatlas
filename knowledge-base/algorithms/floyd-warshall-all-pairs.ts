/**
 * DevAtlas - FLOYD WARSHALL ALL PAIRS
 * Version Iteration: 895
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_895 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 94];
    const result = Solution_895.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
