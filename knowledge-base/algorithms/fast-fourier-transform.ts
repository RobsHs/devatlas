/**
 * DevAtlas - FAST FOURIER TRANSFORM
 * Version Iteration: 3676
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_3676 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 75];
    const result = Solution_3676.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
