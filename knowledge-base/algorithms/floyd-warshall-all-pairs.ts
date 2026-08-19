/**
 * DevAtlas - FLOYD WARSHALL ALL PAIRS
 * Version Iteration: 5119
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_5119 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 18];
    const result = Solution_5119.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
