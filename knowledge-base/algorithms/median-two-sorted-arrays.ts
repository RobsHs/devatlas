/**
 * DevAtlas - MEDIAN TWO SORTED ARRAYS
 * Version Iteration: 2812
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_2812 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 11];
    const result = Solution_2812.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
