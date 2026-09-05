/**
 * DevAtlas - 5000+ Smart Commit Orchestrator (Balanced 365-Day Engine)
 * Generates an evenly distributed, natural GitHub green contribution graph over the past 12 months.
 *
 * Features:
 * - Natural 365-day backdating (every month gets ~400-450 commits)
 * - Varied commit volume per day (creates beautiful multi-shade green heatmap on GitHub)
 * - Realistic working hours (09:00 - 22:30 +0700)
 * - Conventional Commits (feat, test, docs, perf, refactor)
 * - Sub-2-second execution using git fast-import
 */

const { spawnSync } = require('child_process');
const fs = require('fs');

const CONFIG = {
  authorName: 'Freda',
  authorEmail: 'fredapacitan@gmail.com',
  timezone: '+0700',
  daysBack: 365,
  targetBranch: 'main'
};

// Target: 5,100 commits distributed across 365 days (~14 commits/day average)
const TARGET_COMMITS = 5150;

const ALGORITHM_TOPICS = [
  'dijkstra-shortest-path', 'a-star-pathfinding', 'kmp-string-search', 'rabin-karp-hashing',
  'segment-tree-range-query', 'fenwick-tree-binary-indexed', 'trie-prefix-search', 'bloom-filter',
  'lru-cache-eviction', 'lfu-frequency-cache', 'red-black-tree-balancing', 'avl-tree-rotation',
  'b-plus-tree-indexing', 'bellman-ford-negative-cycles', 'floyd-warshall-all-pairs', 'tarjan-strongly-connected',
  'kruskal-minimum-spanning-tree', 'prim-mst-dense-graphs', 'topological-kahn-sorting', 'union-find-disjoint-set',
  'binary-heap-priority-queue', 'fibonacci-heap', 'convex-hull-graham-scan', 'fast-fourier-transform',
  'matrix-exponentiation', 'karatsuba-multiplication', 'miller-rabin-primality', 'chinese-remainder-theorem',
  'sieve-eratosthenes-segmented', 'extended-euclidean-gcd', 'knapsack-01-dynamic-programming', 'coin-change-fewest',
  'longest-increasing-subsequence', 'longest-common-subsequence', 'levenshtein-edit-distance', 'matrix-chain-order',
  'word-break-memoization', 'palindrome-partitioning-dp', 'trapping-rain-water-two-pointers', 'median-two-sorted-arrays',
  'n-queens-backtracking', 'sudoku-solver-constraint', 'hamiltonian-cycle', 'travelling-salesperson-bitmask'
];

const SYSTEM_DESIGN_TOPICS = [
  'cache-aside-pattern-redis', 'write-through-caching-strategy', 'write-behind-asynchronous-flush',
  'consistent-hashing-distributed-nodes', 'token-bucket-rate-limiting', 'leaky-bucket-traffic-shaping',
  'sliding-window-counter-rate-limiter', 'round-robin-load-balancer', 'least-connections-scheduler',
  'cap-theorem-consistency-availability', 'paxos-distributed-consensus', 'raft-leader-election-protocol',
  'two-phase-commit-2pc-transactions', 'saga-orchestration-microservices', 'saga-choreography-event-driven',
  'event-sourcing-cqrs-architecture', 'database-sharding-horizontal-partition', 'read-replica-replication-lag',
  'write-ahead-logging-wal-durability', 'lsm-tree-write-optimization', 'b-tree-read-heavy-indexing',
  'grpc-protobuf-rpc-communication', 'websocket-bidirectional-streaming', 'http3-quic-multiplexing-transport',
  'oauth2-jwt-bearer-token-flow', 'hmac-sha256-webhook-verification', 'zero-trust-network-architecture',
  'ddos-mitigation-cloudflare-waf', 'kubernetes-pod-horizontal-autoscaling', 'docker-multistage-build-optimization',
  'prometheus-metrics-grafana-monitoring', 'elk-centralized-logging-pipeline', 'circuit-breaker-resilience-pattern'
];

const CHEATSHEET_TOPICS = [
  'git-rebase-interactive-squash', 'git-bisect-debugging-regressions', 'git-reflog-commit-recovery',
  'docker-compose-multi-container', 'docker-network-bridge-overlay', 'docker-healthcheck-configuration',
  'linux-systemd-service-unit', 'linux-iptables-firewall-rules', 'linux-cron-scheduled-automation',
  'nginx-reverse-proxy-ssl-termination', 'postgres-explain-analyze-query-plan', 'postgres-btree-gin-indexing',
  'regex-lookahead-lookbehind-assertions', 'regex-catastrophic-backtracking-prevention',
  'bash-scripting-robust-error-handling', 'curl-advanced-header-benchmarking', 'openssl-x509-certificate-generation'
];

const COMMIT_TYPES = [
  { type: 'feat', weight: 45, scope: ['dsa', 'core', 'engine', 'system-design', 'api', 'patterns'] },
  { type: 'test', weight: 25, scope: ['sorting', 'graphs', 'trees', 'dp', 'concurrency', 'e2e'] },
  { type: 'docs', weight: 15, scope: ['architecture', 'readme', 'api-specs', 'cheatsheet', 'rfc'] },
  { type: 'perf', weight: 8,  scope: ['memory', 'cache', 'complexity', 'io', 'allocations'] },
  { type: 'refactor', weight: 7, scope: ['clean-code', 'typings', 'modules', 'interfaces'] }
];

function pickWeighted(items) {
  const total = items.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * total;
  for (const item of items) {
    if (random < item.weight) return item;
    random -= item.weight;
  }
  return items[0];
}

// Generate evenly distributed timestamps across 365 days
function generateBalancedTimestamps(targetCount, daysBack) {
  const now = new Date();
  const timestamps = [];
  
  // Calculate average commits per day
  const avgPerDay = targetCount / daysBack; // ~14.1

  for (let dayOffset = daysBack; dayOffset >= 0; dayOffset--) {
    const dayDate = new Date(now.getTime() - (dayOffset * 24 * 60 * 60 * 1000));
    const dayOfWeek = dayDate.getDay(); // 0: Sun, 6: Sat
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);

    // Natural human pattern:
    // Weekdays: 8 - 22 commits (creates bright green shades)
    // Weekends: 3 - 12 commits (occasional lighter green)
    // 5% chance of holiday/rest day with 0 commits
    if (Math.random() < 0.05) continue;

    let dailyCount;
    if (isWeekend) {
      dailyCount = Math.floor(Math.random() * 8) + 6; // 6 to 13
    } else {
      dailyCount = Math.floor(Math.random() * 14) + 12; // 12 to 25
    }

    for (let c = 0; c < dailyCount; c++) {
      const hour = 9 + Math.floor(Math.random() * 13); // 09:00 - 21:00
      const minute = Math.floor(Math.random() * 60);
      const second = Math.floor(Math.random() * 60);

      const commitDate = new Date(dayDate);
      commitDate.setHours(hour, minute, second, 0);

      const unixSec = Math.floor(commitDate.getTime() / 1000);
      timestamps.push(unixSec);
    }
  }

  // Sort timestamps chronologically
  timestamps.sort((a, b) => a - b);
  return timestamps;
}

function generateCommitPayload(index) {
  const commitConfig = pickWeighted(COMMIT_TYPES);
  const type = commitConfig.type;
  const scope = commitConfig.scope[Math.floor(Math.random() * commitConfig.scope.length)];

  let topic = '';
  let filePath = '';
  let content = '';

  const selector = index % 3;
  if (selector === 0) {
    topic = ALGORITHM_TOPICS[index % ALGORITHM_TOPICS.length];
    filePath = `knowledge-base/algorithms/${topic}.ts`;
    content = `/**
 * DevAtlas - ${topic.toUpperCase().replace(/-/g, ' ')}
 * Version Iteration: ${index + 1}
 * Standard Complexity: O(log n) to O(n log n)
 */

export class Solution_${index + 1} {
  static execute(input: number[]): number[] {
    const copy = [...input];
    return copy.sort((a, b) => a - b);
  }

  static verify(): boolean {
    const sample = [9, 3, 7, 1, 5, ${index % 100}];
    const result = Solution_${index + 1}.execute(sample);
    return result[0] <= result[result.length - 1];
  }
}
`;
  } else if (selector === 1) {
    topic = SYSTEM_DESIGN_TOPICS[index % SYSTEM_DESIGN_TOPICS.length];
    filePath = `knowledge-base/system-design/${topic}.md`;
    content = `# Architecture Specification: ${topic.replace(/-/g, ' ').toUpperCase()}

## 1. Overview (Revision #${index + 1})
This component is part of the high-availability distributed architecture specifications.

## 2. Key Characteristics
- **Fault Tolerance**: Redundant state machine replicas with heartbeats.
- **Latency SLO**: Sub-15ms p99 response time.
- **Data Integrity**: Enforced through write-ahead logs and idempotent retry keys.

## 3. Implementation Checkpoint
- Step: #${index + 1}
- Verified by: ${CONFIG.authorName}
`;
  } else {
    topic = CHEATSHEET_TOPICS[index % CHEATSHEET_TOPICS.length];
    filePath = `knowledge-base/cheatsheets/${topic}.json`;
    content = JSON.stringify({
      id: index + 1,
      topic: topic,
      category: scope,
      lastUpdated: new Date().toISOString(),
      bestPractices: [
        `Always sanitize parameters before execution`,
        `Monitor latency and throughput metrics under peak loads`,
        `Follow standardized Conventional Commits specification`
      ],
      revision: index + 1
    }, null, 2);
  }

  const message = `${type}(${scope}): update ${topic} [rev #${index + 1}]`;
  return { filePath, content, message };
}

function buildFastImportStream(timestamps) {
  const parts = [];

  for (let i = 0; i < timestamps.length; i++) {
    const markId = i + 1;
    const ts = timestamps[i];
    const { filePath, content, message } = generateCommitPayload(i);

    const msgBuffer = Buffer.from(message + '\n', 'utf-8');
    const contentBuffer = Buffer.from(content, 'utf-8');

    let commitHeader = `commit refs/heads/${CONFIG.targetBranch}\nmark :${markId}\n`;
    commitHeader += `author ${CONFIG.authorName} <${CONFIG.authorEmail}> ${ts} ${CONFIG.timezone}\n`;
    commitHeader += `committer ${CONFIG.authorName} <${CONFIG.authorEmail}> ${ts} ${CONFIG.timezone}\n`;
    commitHeader += `data ${msgBuffer.length}\n${message}\n`;

    if (markId > 1) {
      commitHeader += `from :${markId - 1}\n`;
    }

    commitHeader += `M 100644 inline ${filePath}\n`;
    commitHeader += `data ${contentBuffer.length}\n${content}\n`;

    parts.push(commitHeader);
  }

  return parts.join('');
}

function run() {
  console.log('====================================================');
  console.log('🚀 DevAtlas Smart Commit Engine (Balanced 365 Days)');
  console.log('====================================================');
  console.log(`👤 Author:       ${CONFIG.authorName} <${CONFIG.authorEmail}>`);
  console.log(`⏳ Timespan:     Past 365 Days (Evenly Distributed)`);
  console.log(`🌿 Branch:       ${CONFIG.targetBranch}\n`);

  const timestamps = generateBalancedTimestamps(TARGET_COMMITS, CONFIG.daysBack);
  console.log(`📊 Generated ${timestamps.length} balanced timestamps.`);
  console.log(`   From: ${new Date(timestamps[0] * 1000).toDateString()}`);
  console.log(`   To:   ${new Date(timestamps[timestamps.length - 1] * 1000).toDateString()}`);

  const startTime = Date.now();
  console.log('\n⚡ Streaming commits into git fast-import...');

  // Reset ref to start fresh
  spawnSync('git', ['update-ref', '-d', `refs/heads/${CONFIG.targetBranch}`], { encoding: 'utf-8' });

  const fastImport = spawnSync('git', ['fast-import', '--quiet'], {
    input: buildFastImportStream(timestamps),
    maxBuffer: 1024 * 1024 * 350,
    encoding: 'utf-8'
  });

  if (fastImport.status !== 0) {
    console.error('Git fast-import failed:', fastImport.stderr);
    process.exit(1);
  }

  console.log('🔄 Checking out generated tree into working directory...');
  spawnSync('git', ['reset', '--mixed', `refs/heads/${CONFIG.targetBranch}`], { encoding: 'utf-8' });

  // Commit the complete base project files on top
  spawnSync('git', ['add', '.'], { encoding: 'utf-8' });
  const status = spawnSync('git', ['status', '--porcelain'], { encoding: 'utf-8' });
  if (status.stdout.trim().length > 0) {
    spawnSync('git', ['commit', '-m', 'feat(release): consolidate DevAtlas core engine, web app, and documentation'], {
      encoding: 'utf-8'
    });
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  const revCount = spawnSync('git', ['rev-list', '--count', CONFIG.targetBranch], { encoding: 'utf-8' });
  const totalInRepo = parseInt(revCount.stdout.trim(), 10) || 0;

  console.log('\n====================================================');
  console.log(`🎉 SUCCESS! Completed in ${duration} seconds.`);
  console.log(`📈 Total commits in git repo: ${totalInRepo}`);
  console.log('====================================================\n');
}

run();
