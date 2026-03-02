/**
 * DevAtlas - KARATSUBA MULTIPLICATION
 * Version Iteration: 2578
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_2578 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 77];
    const result = Solution_2578.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
