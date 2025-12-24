/**
 * DevAtlas - EXTENDED EUCLIDEAN GCD
 * Version Iteration: 1570
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_1570 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 69];
    const result = Solution_1570.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
