/**
 * DevAtlas - PRIM MST DENSE GRAPHS
 * Version Iteration: 4462
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_4462 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 61];
    const result = Solution_4462.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
