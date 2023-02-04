"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisRepository = void 0;
class RedisRepository {
    constructor(pool, configuration) {
        this.pool = pool;
        this.configuration = configuration;
    }
    async exists(key) {
        if (this.configuration.debug)
            console.log(`key path: ${key}`);
        const result = await this.pool.exists(key);
        return result === 1;
    }
    async get(key) {
        if (this.configuration.debug)
            console.log(`key path: ${key}`);
        return this.pool.get(key) ?? undefined;
    }
    async set(key, value, expiresIn) {
        if (this.configuration.debug)
            console.log(`key path: ${key} \nvalue: ${value}`);
        return this.pool.set(key, value, { EX: expiresIn });
    }
    async del(key) {
        if (this.configuration.debug)
            console.log(`key path: ${key}`);
        const result = await this.pool.del(key);
        return result > 0;
    }
}
exports.RedisRepository = RedisRepository;
//# sourceMappingURL=RedisRepository.js.map