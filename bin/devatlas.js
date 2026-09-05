#!/usr/bin/env node

/**
 * DevAtlas CLI Tool
 * Interactive terminal explorer for algorithms, system design, and developer cheatsheets.
 */

const {
  Sorting,
  Searching,
  DynamicProgramming,
  MathCrypto,
  Cheatsheets
} = require('../src');

const args = process.argv.slice(2);
const command = args[0] ? args[0].toLowerCase() : 'help';
const subarg = args[1] ? args[1].toLowerCase() : null;

const banner = `
\x1b[36m  ██████╗ ███████╗██╗   ██╗ █████╗ ████████╗██╗      █████╗ ███████╗
  ██╔══██╗██╔════╝██║   ██║██╔══██╗╚══██╔══╝██║     ██╔══██╗██╔════╝
  ██║  ██║█████╗  ██║   ██║███████║   ██║   ██║     ███████║███████╗
  ██║  ██║██╔══╝  ╚██╗ ██╔╝██╔══██║   ██║   ██║     ██╔══██║╚════██║
  ██████╔╝███████╗ ╚████╔╝ ██║  ██║   ██║   ███████╗██║  ██║███████║
  ╚═════╝ ╚══════╝  ╚═══╝  ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚══════╝\x1b[0m
  \x1b[90mComputer Science Knowledge & Developer Engine (v1.0.0)\x1b[0m
`;

console.log(banner);

switch (command) {
  case 'big-o':
    console.log('\x1b[33m--- BIG-O COMPLEXITY REFERENCE ---\x1b[0m\n');
    console.log('  Algorithm/Structure   | Best Time   | Average     | Worst       | Space');
    console.log('  --------------------------------------------------------------------------');
    console.log('  QuickSort             | O(n log n)  | O(n log n)  | O(n^2)      | O(log n)');
    console.log('  MergeSort             | O(n log n)  | O(n log n)  | O(n log n)  | O(n)');
    console.log('  HeapSort              | O(n log n)  | O(n log n)  | O(n log n)  | O(1)');
    console.log('  Binary Search         | O(1)        | O(log n)    | O(log n)    | O(1)');
    console.log('  Binary Search Tree    | O(log n)    | O(log n)    | O(n)        | O(n)');
    console.log('  LRU Cache (Get/Put)   | O(1)        | O(1)        | O(1)        | O(n)');
    console.log('\n');
    break;

  case 'cheat':
    if (!subarg || !Cheatsheets[subarg]) {
      console.log('Available cheatsheet categories: \x1b[32mgit, docker, linux, httpStatus, regex\x1b[0m\n');
      console.log('Example: node bin/devatlas.js cheat git\n');
    } else {
      console.log(`\x1b[33m--- CHEATSHEET: ${subarg.toUpperCase()} ---\x1b[0m\n`);
      const list = Cheatsheets[subarg];
      list.forEach((item, idx) => {
        if (item.cmd) {
          console.log(`  \x1b[32m${item.cmd}\x1b[0m\n    ↳ ${item.desc}\n`);
        } else if (item.code) {
          console.log(`  \x1b[35m[HTTP ${item.code}] ${item.name}\x1b[0m: ${item.desc}`);
        } else if (item.pattern) {
          console.log(`  \x1b[36mPattern:\x1b[0m /${item.pattern}/\n    ↳ ${item.desc}\n`);
        }
      });
    }
    break;

  case 'search':
    if (!subarg) {
      console.log('Please provide a search term. Example: node bin/devatlas.js search sort');
    } else {
      console.log(`\x1b[33mSearching for: "${subarg}"...\x1b[0m\n`);
      const matches = [];
      Object.keys(Sorting).forEach(name => {
        if (name.toLowerCase().includes(subarg)) matches.push(`[Sorting] ${name}`);
      });
      Object.keys(Searching).forEach(name => {
        if (name.toLowerCase().includes(subarg)) matches.push(`[Searching] ${name}`);
      });
      Object.keys(DynamicProgramming).forEach(name => {
        if (name.toLowerCase().includes(subarg)) matches.push(`[DP] ${name}`);
      });
      Object.keys(MathCrypto).forEach(name => {
        if (name.toLowerCase().includes(subarg)) matches.push(`[Math] ${name}`);
      });

      if (matches.length === 0) {
        console.log('No direct algorithmic match found.');
      } else {
        matches.forEach(m => console.log(`  \x1b[32m✔\x1b[0m ${m}`));
      }
      console.log('');
    }
    break;

  case 'help':
  default:
    console.log('\x1b[33mCommands:\x1b[0m');
    console.log('  \x1b[32mbig-o\x1b[0m                  View algorithm complexity cheatsheet');
    console.log('  \x1b[32mcheat <category>\x1b[0m       View cheatsheets (git, docker, linux, regex, httpStatus)');
    console.log('  \x1b[32msearch <keyword>\x1b[0m       Search algorithms in the library');
    console.log('  \x1b[32mhelp\x1b[0m                   Display this help message');
    console.log('\n\x1b[90mRun the web interface: npm start (http://localhost:3000)\x1b[0m\n');
    break;
}
