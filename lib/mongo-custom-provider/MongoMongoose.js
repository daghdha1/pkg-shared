"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoMongooseProvider = void 0;
const knex_1 = __importDefault(require("knex"));
/* export const mysqlKnex = knex({
  client: 'mysql2',
}); */
const MongoMongooseProvider = async (config) => {
    const { host, database, port, user, password, name, maxConnections, minConnections, useNullAsDefault, } = config;
    const poolNameString = name ? ` ${name} ` : ' ';
    const knexPool = (0, knex_1.default)({
        client: 'mysql2',
        connection: {
            host: host,
            port: port ?? 3306,
            user,
            password,
            database,
        },
        useNullAsDefault,
        pool: { min: minConnections ?? 1, max: maxConnections ?? 5 },
    });
    try {
        await knexPool.select(1);
        console.log('\x1b[32m%s\x1b[0m', `Connection pool${poolNameString}(MysqlKnex) created`);
    }
    catch (error) {
        console.log('\x1b[31m%s\x1b[0m', `Could not create${poolNameString}connection pool (MysqlKnex)`);
        return null;
    }
    return knexPool;
};
exports.MongoMongooseProvider = MongoMongooseProvider;
//# sourceMappingURL=MongoMongoose.js.map