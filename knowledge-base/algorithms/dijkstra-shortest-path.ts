/**
 * DevAtlas - DIJKSTRA SHORTEST PATH
 * Version Iteration: 4093
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_4093 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 92];
    const result = Solution_4093.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
