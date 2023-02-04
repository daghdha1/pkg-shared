"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlProvider = void 0;
const mysql = __importStar(require("mysql2/promise"));
const MysqlProvider = async (config) => {
    const { database, host, user, password, maxConnections, name, port } = config;
    const variablesNeeded = [];
    const defaultMaxConnections = 10;
    const poolNameString = name ? ` ${name} ` : ' ';
    if (!host || host.trim() === '')
        variablesNeeded.push('host');
    if (!database || database.trim() === '')
        variablesNeeded.push('database');
    if (!user || user.trim() === '')
        variablesNeeded.push('user');
    if (variablesNeeded.length > 0)
        console.log(`Mysql provider needs ${variablesNeeded.join(', ')} to not be empty or undefined`);
    let pool = null;
    try {
        pool = mysql.createPool({
            host,
            user,
            database,
            password,
            port: port ?? 3306,
            waitForConnections: true,
            connectionLimit: maxConnections ?? defaultMaxConnections,
            queueLimit: 0,
            dateStrings: false,
        });
        await pool.query('SELECT 1');
        console.log('\x1b[32m%s\x1b[0m', `Connection pool${poolNameString}(Mysql) created`);
    }
    catch (error) {
        console.log('\x1b[31m%s\x1b[0m', `Could not create${poolNameString}connection pool (Mysql)`);
    }
    return pool;
};
exports.MysqlProvider = MysqlProvider;
//# sourceMappingURL=MysqlProvider.js.map