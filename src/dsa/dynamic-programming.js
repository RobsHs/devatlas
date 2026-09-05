/**
 * DevAtlas - Dynamic Programming Algorithms
 */

const DynamicProgramming = {
  /**
   * Fibonacci with memoization
   * Time: O(n) | Space: O(n)
   */
  fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = this.fibonacci(n - 1, memo) + this.fibonacci(n - 2, memo);
    return memo[n];
  },

  /**
   * 0/1 Knapsack Problem
   * Time: O(n * W) | Space: O(n * W)
   */
  knapsack(values, weights, capacity) {
    const n = values.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
          dp[i][w] = Math.max(
            values[i - 1] + dp[i - 1][w - weights[i - 1]],
            dp[i - 1][w]
          );
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
    return dp[n][capacity];
  },

  /**
   * Longest Common Subsequence (LCS)
   * Time: O(m * n) | Space: O(m * n)
   */
  longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (text1[i - 1] === text2[j - 1]) {
          dp[i][j] = 1 + dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
    return dp[m][n];
  },

  /**
   * Coin Change (Minimum coins required to make amount)
   * Time: O(amount * coins.length) | Space: O(amount)
   */
  coinChange(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
      for (const coin of coins) {
        if (i - coin >= 0) {
          dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
      }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
  },

  /**
   * Levenshtein Distance (Minimum operations to transform str1 into str2)
   * Time: O(m * n) | Space: O(m * n)
   */
  levenshteinDistance(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(
            dp[i - 1][j],    // Deletion
            dp[i][j - 1],    // Insertion
            dp[i - 1][j - 1] // Substitution
          );
        }
      }
    }
    return dp[m][n];
  }
};

module.exports = DynamicProgramming;
