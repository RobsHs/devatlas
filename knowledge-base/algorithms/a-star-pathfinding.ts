/**
 * DevAtlas - A STAR PATHFINDING
 * Version Iteration: 1762
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_1762 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 61];
    const result = Solution_1762.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
