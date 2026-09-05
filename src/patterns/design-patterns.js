/**
 * DevAtlas - Design Patterns Reference & Implementations
 */

// 1. Singleton Pattern
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.data = { initializedAt: new Date().toISOString() };
    Singleton.instance = this;
  }
}

// 2. Factory Pattern
class NotificationFactory {
  static create(type) {
    switch (type.toLowerCase()) {
      case 'email':
        return { send: (msg) => `[Email] Sent: ${msg}` };
      case 'sms':
        return { send: (msg) => `[SMS] Sent: ${msg}` };
      case 'push':
        return { send: (msg) => `[Push] Sent: ${msg}` };
      default:
        throw new Error(`Unsupported notification type: ${type}`);
    }
  }
}

// 3. Builder Pattern
class RequestConfigBuilder {
  constructor() {
    this.config = { method: 'GET', headers: {}, timeout: 5000 };
  }

  setMethod(method) {
    this.config.method = method.toUpperCase();
    return this;
  }

  setHeader(key, value) {
    this.config.headers[key] = value;
    return this;
  }

  setTimeout(ms) {
    this.config.timeout = ms;
    return this;
  }

  setBody(body) {
    this.config.body = body;
    return this;
  }

  build() {
    return { ...this.config };
  }
}

// 4. Observer Pattern (EventEmitter)
class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
    return () => this.off(event, callback);
  }

  off(event, callback) {
    if (!this.listeners.has(event)) return;
    const filtered = this.listeners.get(event).filter(cb => cb !== callback);
    this.listeners.set(event, filtered);
  }

  emit(event, ...args) {
    if (!this.listeners.has(event)) return;
    for (const callback of this.listeners.get(event)) {
      callback(...args);
    }
  }
}

// 5. Strategy Pattern
class PaymentProcessor {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  pay(amount) {
    if (!this.strategy) throw new Error('No payment strategy configured');
    return this.strategy.process(amount);
  }
}

const PaymentStrategies = {
  CreditCard: {
    process: (amount) => `Charged $${amount} via Credit Card`
  },
  PayPal: {
    process: (amount) => `Charged $${amount} via PayPal`
  },
  Crypto: {
    process: (amount) => `Transferred $${amount} via USDT/ETH`
  }
};

module.exports = {
  Singleton,
  NotificationFactory,
  RequestConfigBuilder,
  EventEmitter,
  PaymentProcessor,
  PaymentStrategies
};
