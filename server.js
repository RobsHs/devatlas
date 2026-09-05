/**
 * DevAtlas - Web Server
 * Zero-dependency native Node.js HTTP Server with REST API & Static File Serving.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const {
  Sorting,
  Searching,
  DynamicProgramming,
  MathCrypto,
  DesignPatterns,
  SystemDesign,
  Cheatsheets
} = require('./src');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // REST API Endpoints
  if (pathname === '/api/stats') {
    const stats = {
      algorithmsCount: Object.keys(Sorting).length + Object.keys(Searching).length + Object.keys(DynamicProgramming).length + Object.keys(MathCrypto).length,
      patternsCount: Object.keys(DesignPatterns).length,
      cheatsheetsCount: Object.values(Cheatsheets).reduce((acc, arr) => acc + arr.length, 0),
      systemDesignTopics: 8,
      status: 'operational',
      uptime: process.uptime()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(stats));
    return;
  }

  if (pathname === '/api/dsa') {
    const dsaCatalog = [
      { category: 'Sorting', name: 'QuickSort', complexity: 'O(n log n)', desc: 'Divide-and-conquer in-place partitioning' },
      { category: 'Sorting', name: 'MergeSort', complexity: 'O(n log n)', desc: 'Guaranteed stable divide-and-conquer sort' },
      { category: 'Sorting', name: 'HeapSort', complexity: 'O(n log n)', desc: 'Binary heap based in-place selection sort' },
      { category: 'Sorting', name: 'InsertionSort', complexity: 'O(n^2)', desc: 'Adaptive sorting efficient for small arrays' },
      { category: 'Sorting', name: 'BubbleSort', complexity: 'O(n^2)', desc: 'Iterative adjacent element swapping' },
      { category: 'Sorting', name: 'CountingSort', complexity: 'O(n + k)', desc: 'Non-comparative integer sorting' },
      { category: 'Searching', name: 'Binary Search', complexity: 'O(log n)', desc: 'Halving interval search on sorted arrays' },
      { category: 'Searching', name: 'Exponential Search', complexity: 'O(log n)', desc: 'Range doubling then binary search' },
      { category: 'Searching', name: 'Jump Search', complexity: 'O(√n)', desc: 'Fixed block jumping with linear fallback' },
      { category: 'Dynamic Programming', name: '0/1 Knapsack', complexity: 'O(n × W)', desc: 'Optimal subset item value selection' },
      { category: 'Dynamic Programming', name: 'Longest Common Subsequence', complexity: 'O(m × n)', desc: 'Longest sequence present in both strings' },
      { category: 'Dynamic Programming', name: 'Levenshtein Distance', complexity: 'O(m × n)', desc: 'Minimum edit operations between two strings' },
      { category: 'Dynamic Programming', name: 'Coin Change', complexity: 'O(amount × coins)', desc: 'Fewest coins needed to make up amount' },
      { category: 'Math & Number Theory', name: 'Sieve of Eratosthenes', complexity: 'O(n log log n)', desc: 'Generate all primes up to N' },
      { category: 'Math & Number Theory', name: 'Modular Exponentiation', complexity: 'O(log exp)', desc: 'Fast (base^exp) % mod computation' }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(dsaCatalog));
    return;
  }

  if (pathname === '/api/cheats') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(Cheatsheets));
    return;
  }

  if (pathname === '/api/benchmark' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const size = Math.min(Math.max(parseInt(data.size) || 5000, 100), 50000);
        
        // Generate random array
        const randomArr = Array.from({ length: size }, () => Math.floor(Math.random() * 100000));
        
        const results = {};
        
        // QuickSort
        let t0 = process.hrtime.bigint();
        Sorting.quickSort(randomArr);
        let t1 = process.hrtime.bigint();
        results.quickSort = Number(t1 - t0) / 1e6; // ms

        // MergeSort
        t0 = process.hrtime.bigint();
        Sorting.mergeSort(randomArr);
        t1 = process.hrtime.bigint();
        results.mergeSort = Number(t1 - t0) / 1e6;

        // HeapSort
        t0 = process.hrtime.bigint();
        Sorting.heapSort(randomArr);
        t1 = process.hrtime.bigint();
        results.heapSort = Number(t1 - t0) / 1e6;

        if (size <= 10000) {
          // InsertionSort (only for <= 10k to avoid freezing)
          t0 = process.hrtime.bigint();
          Sorting.insertionSort(randomArr);
          t1 = process.hrtime.bigint();
          results.insertionSort = Number(t1 - t0) / 1e6;
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ size, results }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // Static File Serving
  let filePath = path.join(PUBLIC_DIR, pathname === '/' ? 'index.html' : pathname);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`\n🚀 DevAtlas Server is active at: http://localhost:${PORT}`);
    console.log(`   Interactive Web UI & Realtime API loaded successfully.\n`);
  });
}

module.exports = server;
