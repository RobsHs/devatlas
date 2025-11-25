/**
 * DevAtlas - RABIN KARP HASHING
 * Version Iteration: 1192
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_1192 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 91];
    const result = Solution_1192.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
