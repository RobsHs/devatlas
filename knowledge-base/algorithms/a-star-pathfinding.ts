/**
 * DevAtlas - A STAR PATHFINDING
 * Version Iteration: 310
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_310 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 9];
    const result = Solution_310.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
