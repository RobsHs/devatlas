/**
 * DevAtlas - Mathematical & Cryptographic Utilities
 */

const MathCrypto = {
  /**
   * Sieve of Eratosthenes: Finds all prime numbers up to n.
   * Time Complexity: O(n log log n) | Space Complexity: O(n)
   */
  sieveOfEratosthenes(limit) {
    if (limit < 2) return [];
    const isPrime = new Uint8Array(limit + 1).fill(1);
    isPrime[0] = 0;
    isPrime[1] = 0;

    for (let p = 2; p * p <= limit; p++) {
      if (isPrime[p]) {
        for (let i = p * p; i <= limit; i += p) {
          isPrime[i] = 0;
        }
      }
    }

    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (isPrime[i]) primes.push(i);
    }
    return primes;
  },

  /**
   * Greatest Common Divisor (GCD) using Euclidean Algorithm
   */
  gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  },

  /**
   * Least Common Multiple (LCM)
   */
  lcm(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / this.gcd(a, b);
  },

  /**
   * Modular Exponentiation: Computes (base^exp) % mod in O(log exp) time.
   */
  modularExponentiation(base, exp, mod) {
    let res = 1n;
    let b = BigInt(base) % BigInt(mod);
    let e = BigInt(exp);
    const m = BigInt(mod);

    while (e > 0n) {
      if (e % 2n === 1n) {
        res = (res * b) % m;
      }
      e = e / 2n;
      b = (b * b) % m;
    }
    return Number(res);
  },

  /**
   * FNV-1a Hash Algorithm (32-bit)
   * Widely used for fast hash tables and checksums.
   */
  fnv1a(str) {
    let hash = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
      hash ^= str.charCodeAt(i);
      hash = Math.imul(hash, 0x01000193);
    }
    return (hash >>> 0).toString(16);
  },
};

module.exports = MathCrypto;
