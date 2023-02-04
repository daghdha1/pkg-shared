"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlRepository = void 0;
class MysqlRepository {
    constructor(pool, configuration) {
        this.pool = pool;
        this.configuration = configuration;
    }
    async select(query) {
        if (this.configuration.debug)
            console.log(query);
        const start = performance.now();
        const [rows] = await this.pool.query(query);
        if (this.configuration.debug)
            console.log(performance.now() - start);
        return rows;
    }
    async selectOne(query) {
        const rows = await this.select(query);
        return rows?.[0];
    }
    async insert(query, values) {
        if (this.configuration.debug)
            console.log(query);
        const start = performance.now();
        const response = (await this.pool.query(query, values ? [values] : null))[0];
        if (this.configuration.debug)
            console.log(performance.now() - start);
        if (response)
            return response;
    }
    async update(query) {
        if (this.configuration.debug)
            console.log(query);
        const start = performance.now();
        const response = await this.pool.query(query);
        if (this.configuration.debug)
            console.log(performance.now() - start);
        if (response)
            return response;
    }
    async delete(query) {
        if (this.configuration.debug)
            console.log(query);
        const start = performance.now();
        const response = await this.pool.query(query);
        if (this.configuration.debug)
            console.log(performance.now() - start);
        if (response)
            return response;
    }
}
exports.MysqlRepository = MysqlRepository;
//# sourceMappingURL=MysqlRepository.js.map