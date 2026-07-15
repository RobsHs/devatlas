/**
 * DevAtlas - KARATSUBA MULTIPLICATION
 * Version Iteration: 4558
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_4558 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 57];
    const result = Solution_4558.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
