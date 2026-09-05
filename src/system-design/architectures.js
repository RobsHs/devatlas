/**
 * DevAtlas - System Design Concepts & Simulation Engine
 */

// 1. Token Bucket Rate Limiter
class TokenBucket {
  constructor(capacity, refillRatePerSec) {
    this.capacity = capacity;
    this.refillRate = refillRatePerSec;
    this.tokens = capacity;
    this.lastRefill = Date.now();
  }

  refill() {
    const now = Date.now();
    const elapsedTime = (now - this.lastRefill) / 1000;
    const tokensToAdd = elapsedTime * this.refillRate;
    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
    this.lastRefill = now;
  }

  allowRequest(tokens = 1) {
    this.refill();
    if (this.tokens >= tokens) {
      this.tokens -= tokens;
      return true;
    }
    return false;
  }
}

// 2. Round-Robin Load Balancer Simulation
class RoundRobinLoadBalancer {
  constructor(servers = []) {
    this.servers = [...servers];
    this.currentIndex = 0;
  }

  addServer(server) {
    this.servers.push(server);
  }

  removeServer(server) {
    this.servers = this.servers.filter(s => s !== server);
    if (this.currentIndex >= this.servers.length) {
      this.currentIndex = 0;
    }
  }

  getNextServer() {
    if (this.servers.length === 0) return null;
    const server = this.servers[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.servers.length;
    return server;
  }
}

// 3. Cache-Aside Simulation
class CacheAsideService {
  constructor(database, cacheTTLMs = 60000) {
    this.db = database;
    this.cache = new Map();
    this.ttl = cacheTTLMs;
  }

  async get(key) {
    const cached = this.cache.get(key);
    if (cached && cached.expiry > Date.now()) {
      return { data: cached.value, source: 'cache' };
    }

    const value = await this.db.read(key);
    if (value !== undefined) {
      this.cache.set(key, { value, expiry: Date.now() + this.ttl });
    }
    return { data: value, source: 'database' };
  }

  async set(key, value) {
    await this.db.write(key, value);
    this.cache.delete(key); // Invalidate cache on write
  }
}

const SystemDesignKnowledge = {
  capTheorem: {
    name: "CAP Theorem",
    definition: "A distributed system can only guarantee at most two of: Consistency, Availability, and Partition Tolerance.",
    tradeoffs: {
      CP: "Prioritizes consistency over availability during network partitions (e.g., HBase, MongoDB, Redis Cluster).",
      AP: "Prioritizes availability over consistency during network partitions (e.g., Cassandra, DynamoDB, CouchDB)."
    }
  },
  acidVsBase: {
    name: "ACID vs BASE",
    acid: "Atomicity, Consistency, Isolation, Durability (Relational DBs like PostgreSQL, MySQL)",
    base: "Basically Available, Soft state, Eventual consistency (NoSQL, Distributed Key-Value)"
  }
};

module.exports = {
  TokenBucket,
  RoundRobinLoadBalancer,
  CacheAsideService,
  SystemDesignKnowledge
};
