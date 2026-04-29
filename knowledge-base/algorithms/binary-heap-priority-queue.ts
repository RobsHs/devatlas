/**
 * DevAtlas - BINARY HEAP PRIORITY QUEUE
 * Version Iteration: 3409
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_3409 {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, 8];
    const result = Solution_3409.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
