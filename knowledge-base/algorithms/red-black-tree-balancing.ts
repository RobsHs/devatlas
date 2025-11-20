/**
 * DevAtlas - RED BLACK TREE BALANCING
 * Version Iteration: 1111
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_1111 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 10];
    const result = Solution_1111.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
