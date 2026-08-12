/**
 * DevAtlas - TRAPPING RAIN WATER TWO POINTERS
 * Version Iteration: 5011
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_5011 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 10];
    const result = Solution_5011.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
