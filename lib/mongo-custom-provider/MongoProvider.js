"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdFromObjectId = exports.getObjectId = exports.MongoProvider = void 0;
const mongodb_1 = require("mongodb");
const MongoProvider = async (config) => {
    const { database, host, user, password, maxPoolSize, name, port } = config;
    const variablesNeeded = [];
    const poolNameString = name ? ` ${name} ` : ' ';
    let userAndPassFormatted = '';
    if (!database || database.trim() === '')
        variablesNeeded.push('database');
    if (!host || host.trim() === '')
        variablesNeeded.push('host');
    //if (!user || user.trim() === '') variablesNeeded.push('user');
    //if (!password || password.trim() === '') variablesNeeded.push('password');
    if (variablesNeeded.length > 0)
        console.log(`Mongo provider needs ${variablesNeeded.join(', ')} to not be empty or undefined`);
    if (user && user.trim().length > 0 && password && password.trim().length > 0)
        userAndPassFormatted = `${user}${password}@`;
    let pool = null;
    try {
        const uri = `mongodb://${userAndPassFormatted}${host}:${port}/?maxPoolSize=${maxPoolSize}`;
        pool = new mongodb_1.MongoClient(uri);
        await pool.connect();
        console.log('\x1b[32m%s\x1b[0m', `Connection pool${poolNameString}(Mongo) created`);
    }
    catch (error) {
        console.log('\x1b[31m%s\x1b[0m', `Could not create${poolNameString}connection pool (Mongo)`);
    }
    return pool;
};
exports.MongoProvider = MongoProvider;
function getObjectId(id) {
    return new mongodb_1.ObjectId(id);
}
exports.getObjectId = getObjectId;
function getIdFromObjectId(obj) {
    return obj.toString();
}
exports.getIdFromObjectId = getIdFromObjectId;
//# sourceMappingURL=MongoProvider.js.map