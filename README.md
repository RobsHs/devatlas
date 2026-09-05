# 🌐 DevAtlas — Computer Science & Software Engineering Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)](https://nodejs.org/)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

**DevAtlas** is an open-source, zero-dependency Computer Science Knowledge Base, Algorithm & Data Structure Library, System Design Atlas, and Developer Utilities Suite.

Designed for engineers, computer science students, and interview candidates who want a reliable, high-performance reference and playground directly from the terminal or browser.

---

## 🚀 Key Highlights

- **⚡ Zero External Dependencies**: Runs instantly on pure Node.js runtime without needing heavy third-party dependencies.
- **📚 100+ Core Algorithms & Data Structures**: Fully implemented, tested, and documented with Big-O time and space complexity.
- **📐 System Design & Architecture Patterns**: Reference guides for scalability, microservices, caching strategies, CAP theorem, and distributed systems.
- **🛠️ Interactive Web Dashboard**: Dark-mode glassmorphism UI with live algorithm benchmarks, search engine, and interactive Big-O complexity charts.
- **💻 Interactive CLI Explorer**: Quick lookup for regex patterns, HTTP status codes, Git commands, and algorithm complexities straight from your terminal.
- **🧪 Built-in Test Runner**: Instant verification across all sorting, searching, tree, graph, and dynamic programming modules.

---

## 📂 Project Architecture

```
devatlas/
├── bin/
│   └── devatlas.js           # Interactive Terminal CLI tool
├── public/
│   ├── index.html            # Modern Web Dashboard (Dark Mode UI)
│   ├── style.css             # Glassmorphism & Cyberpunk responsive styles
│   └── app.js                # Frontend logic & live benchmark runner
├── scripts/
│   ├── dataset-generator.js  # 5,000+ Structured CS entries generator
│   └── commit-engine.js      # Smart Git Commit orchestrator
├── src/
│   ├── index.js              # Central module export
│   ├── dsa/
│   │   ├── sorting.js        # QuickSort, MergeSort, HeapSort, TimSort, etc.
│   │   ├── searching.js      # Binary, Exponential, Interpolation Search
│   │   ├── data-structures.js# BST, Trie, Graph, LRU Cache, Priority Queue
│   │   ├── dynamic-programming.js # Knapsack, LCS, Levenshtein, Coin Change
│   │   └── math-crypto.js    # Prime Sieve, Modular Arithmetic, GCD/LCM
│   ├── patterns/
│   │   └── design-patterns.js# Factory, Observer, Strategy, Decorator, etc.
│   ├── system-design/
│   │   └── architectures.js  # Caching, Rate Limiting, Sharding, CAP
│   └── cheatsheets/
│       └── developer-data.js # Docker, Git, Linux, Regex, HTTP Codes
├── test/
│   └── run-tests.js          # Lightweight test suite
├── server.js                 # Native HTTP web server
└── package.json
```

---

## ⚡ Getting Started

### 1. Installation

Clone the repository and inspect the project:

```bash
git clone https://github.com/Freda/devatlas.git
cd devatlas
```

### 2. Run the Web Dashboard

Start the local server (zero `npm install` needed!):

```bash
npm start
```

Open your browser at `http://localhost:3000`.

### 3. Run the CLI Tool

Search algorithms or developer cheatsheets directly from terminal:

```bash
npm run cli
# or
node bin/devatlas.js search quicksort
node bin/devatlas.js big-o
node bin/devatlas.js cheat docker
```

### 4. Run Unit Tests

Execute the automated test suite:

```bash
npm test
```

---

## 📊 Big-O Complexity Matrix

| Algorithm / Structure    | Best Time     | Average Time  | Worst Time    | Space Complexity |
| :----------------------- | :------------ | :------------ | :------------ | :--------------- |
| **QuickSort**            | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$      | $O(\log n)$      |
| **MergeSort**            | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(n)$           |
| **HeapSort**             | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(1)$           |
| **Binary Search**        | $O(1)$        | $O(\log n)$   | $O(\log n)$   | $O(1)$           |
| **Binary Search Tree**   | $O(\log n)$   | $O(\log n)$   | $O(n)$        | $O(n)$           |
| **LRU Cache (Get/Put)**  | $O(1)$        | $O(1)$        | $O(1)$        | $O(n)$           |
| **Trie (Insert/Search)** | $O(L)$        | $O(L)$        | $O(L)$        | $O(A \times L)$  |

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create.
Any contributions you make are **greatly appreciated**!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some AmazingFeature'`)
4. Push to the Branch (`git push origin feat/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

Maintained with ❤️ by **Freda** ([@RobsHs](https://github.com/RobsHs)).
