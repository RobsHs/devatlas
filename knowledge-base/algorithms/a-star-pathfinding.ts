/**
 * DevAtlas - A STAR PATHFINDING
 * Version Iteration: 706
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_706 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 5];
    const result = Solution_706.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
