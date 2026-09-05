/**
 * DevAtlas Built-in Test Runner
 * Validates algorithmic correctness, edge cases, and runtime stability.
 */

const {
  Sorting,
  Searching,
  DataStructures: { LinkedList, BinarySearchTree, Trie, LRUCache, Graph },
  DynamicProgramming,
  MathCrypto,
  DesignPatterns: {
    Singleton,
    NotificationFactory,
    RequestConfigBuilder,
    EventEmitter,
    PaymentProcessor,
    PaymentStrategies,
  },
  SystemDesign: { TokenBucket, RoundRobinLoadBalancer },
} = require("../src");

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  \x1b[32m✔\x1b[0m ${message}`);
  } else {
    console.error(`  \x1b[31m✖ FAIL:\x1b[0m ${message}`);
  }
}

console.log("\n========================================");
console.log("🧪 Starting DevAtlas Test Suite...");
console.log("========================================\n");

// 1. Sorting Algorithms
console.log("\x1b[36m[Sorting Algorithms]\x1b[0m");
const unsorted = [64, 34, 25, 12, 22, 11, 90, 5, 0, -3];
const expectedSorted = [-3, 0, 5, 11, 12, 22, 25, 34, 64, 90];

assert(
  JSON.stringify(Sorting.quickSort(unsorted)) ===
    JSON.stringify(expectedSorted),
  "QuickSort sorts correctly",
);
assert(
  JSON.stringify(Sorting.mergeSort(unsorted)) ===
    JSON.stringify(expectedSorted),
  "MergeSort sorts correctly",
);
assert(
  JSON.stringify(Sorting.heapSort(unsorted)) === JSON.stringify(expectedSorted),
  "HeapSort sorts correctly",
);
assert(
  JSON.stringify(Sorting.insertionSort(unsorted)) ===
    JSON.stringify(expectedSorted),
  "InsertionSort sorts correctly",
);
assert(
  JSON.stringify(Sorting.bubbleSort(unsorted)) ===
    JSON.stringify(expectedSorted),
  "BubbleSort sorts correctly",
);

const positiveArray = [4, 2, 2, 8, 3, 3, 1];
assert(
  JSON.stringify(Sorting.countingSort(positiveArray)) ===
    JSON.stringify([1, 2, 2, 3, 3, 4, 8]),
  "CountingSort sorts correctly",
);

// 2. Searching Algorithms
console.log("\n\x1b[36m[Searching Algorithms]\x1b[0m");
const searchArr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
assert(
  Searching.linearSearch(searchArr, 40) === 3,
  "LinearSearch finds element",
);
assert(
  Searching.binarySearch(searchArr, 50) === 4,
  "BinarySearch finds element in log(n)",
);
assert(Searching.jumpSearch(searchArr, 70) === 6, "JumpSearch finds element");
assert(
  Searching.exponentialSearch(searchArr, 90) === 8,
  "ExponentialSearch finds element",
);
assert(
  Searching.binarySearch(searchArr, 999) === -1,
  "BinarySearch handles not found",
);

// 3. Data Structures
console.log("\n\x1b[36m[Data Structures]\x1b[0m");
// LinkedList
const list = new LinkedList();
list.append(1).append(2).prepend(0);
assert(
  JSON.stringify(list.toArray()) === JSON.stringify([0, 1, 2]),
  "LinkedList append & prepend",
);

// BST
const bst = new BinarySearchTree();
[50, 30, 70, 20, 40, 60, 80].forEach((n) => bst.insert(n));
assert(bst.find(60) === true, "BinarySearchTree finds existing node");
assert(bst.find(999) === false, "BinarySearchTree handles absent node");
assert(
  JSON.stringify(bst.inOrderTraversal()) ===
    JSON.stringify([20, 30, 40, 50, 60, 70, 80]),
  "BST inOrder produces sorted sequence",
);

// Trie
const trie = new Trie();
trie.insert("devatlas");
trie.insert("developer");
assert(trie.search("devatlas") === true, "Trie finds full word");
assert(
  trie.search("dev") === false,
  "Trie correctly identifies non-word prefix",
);
assert(trie.startsWith("dev") === true, "Trie startsWith works");

// LRU Cache
const cache = new LRUCache(2);
cache.put("a", 1);
cache.put("b", 2);
assert(cache.get("a") === 1, "LRUCache gets existing key");
cache.put("c", 3); // evicts 'b'
assert(cache.get("b") === -1, "LRUCache evicts least recently used item");
assert(cache.get("c") === 3, "LRUCache retains newly inserted item");

// Graph
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("A", "D");
assert(graph.bfs("A").length === 4, "Graph BFS explores all connected nodes");

// 4. Dynamic Programming
console.log("\n\x1b[36m[Dynamic Programming]\x1b[0m");
assert(
  DynamicProgramming.fibonacci(10) === 55,
  "Fibonacci memoized works for N=10",
);
assert(
  DynamicProgramming.knapsack([60, 100, 120], [10, 20, 30], 50) === 220,
  "0/1 Knapsack optimal value",
);
assert(
  DynamicProgramming.longestCommonSubsequence("abcde", "ace") === 3,
  "LCS calculates correct length",
);
assert(
  DynamicProgramming.coinChange([1, 2, 5], 11) === 3,
  "CoinChange finds min coins",
);
assert(
  DynamicProgramming.levenshteinDistance("kitten", "sitting") === 3,
  "Levenshtein distance calculation",
);

// 5. Math & Crypto
console.log("\n\x1b[36m[Math & Crypto]\x1b[0m");
const primes20 = MathCrypto.sieveOfEratosthenes(20);
assert(
  JSON.stringify(primes20) === JSON.stringify([2, 3, 5, 7, 11, 13, 17, 19]),
  "Sieve finds primes up to 20",
);
assert(MathCrypto.gcd(48, 18) === 6, "GCD of 48 and 18 is 6");
assert(MathCrypto.lcm(12, 15) === 60, "LCM of 12 and 15 is 60");
assert(
  MathCrypto.modularExponentiation(2, 10, 1000) === 24,
  "Modular exponentiation 2^10 % 1000 = 24",
);
assert(
  typeof MathCrypto.fnv1a("DevAtlas") === "string",
  "FNV-1a produces hash",
);

// 6. Design Patterns & System Design
console.log("\n\x1b[36m[Patterns & System Design]\x1b[0m");
const s1 = new Singleton();
const s2 = new Singleton();
assert(s1 === s2, "Singleton instance equality");

const emailNotifier = NotificationFactory.create("email");
assert(
  emailNotifier.send("Hello").includes("[Email]"),
  "NotificationFactory creates email service",
);

const req = new RequestConfigBuilder()
  .setMethod("POST")
  .setHeader("Auth", "Bearer 123")
  .build();
assert(
  req.method === "POST" && req.headers.Auth === "Bearer 123",
  "Builder creates config",
);

const rr = new RoundRobinLoadBalancer(["Server-1", "Server-2"]);
assert(
  rr.getNextServer() === "Server-1" &&
    rr.getNextServer() === "Server-2" &&
    rr.getNextServer() === "Server-1",
  "RoundRobin load balancing rotation",
);

const bucket = new TokenBucket(5, 1);
assert(bucket.allowRequest(3) === true, "TokenBucket allows valid request");

console.log("\n========================================");
console.log(
  `📊 Test Results: ${passedTests}/${totalTests} Passed (${Math.round((passedTests / totalTests) * 100)}%)`,
);
console.log("========================================\n");

if (passedTests !== totalTests) {
  process.exit(1);
}
