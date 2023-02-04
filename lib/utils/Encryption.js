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
exports.stretchStr = exports.generateRandomHex = exports.generateRandomUtf8 = exports.generateRandomBytes = exports.decryptStr = exports.encryptStr = exports.compareStrWithStrHashed = exports.hashStr = void 0;
const bcrypt = __importStar(require("bcrypt"));
const crypto = __importStar(require("crypto"));
const hashStr = async (str) => bcrypt.hash(str, 10);
exports.hashStr = hashStr;
const compareStrWithStrHashed = async (str, strHashed) => {
    return bcrypt.compare(str, strHashed);
};
exports.compareStrWithStrHashed = compareStrWithStrHashed;
const encryptStr = (strTarget, hash) => {
    const initVector = Buffer.from(process.env.CRYPTO_INIT_HEX_VECTOR, 'hex');
    const securityKey = Buffer.from(hash.substring(0, 32), 'utf8');
    const cipher = crypto.createCipheriv(process.env.CRYPTO_ALGORITHM, securityKey, initVector);
    let strEncrypted = cipher.update(strTarget, 'hex', 'base64');
    strEncrypted += cipher.final('base64');
    return strEncrypted;
};
exports.encryptStr = encryptStr;
const decryptStr = (strTarget, hash) => {
    const initVector = Buffer.from(process.env.CRYPTO_INIT_HEX_VECTOR, 'hex');
    const securityKey = Buffer.from(hash.substring(0, 32), 'utf8');
    const decipher = crypto.createDecipheriv(process.env.CRYPTO_ALGORITHM, securityKey, initVector);
    let strDecrypted = decipher.update(strTarget, 'base64', 'hex');
    strDecrypted += decipher.final('hex');
    return strDecrypted;
};
exports.decryptStr = decryptStr;
const generateRandomBytes = (lenght) => {
    return crypto.randomBytes(lenght);
};
exports.generateRandomBytes = generateRandomBytes;
const generateRandomUtf8 = (length) => {
    return crypto.randomBytes(length).toString('utf-8');
};
exports.generateRandomUtf8 = generateRandomUtf8;
const generateRandomHex = (length) => {
    return crypto.randomBytes(length).toString('hex');
};
exports.generateRandomHex = generateRandomHex;
// weak pass (utf-8) --> stretchString(Buffer) --> hex --> hash
const stretchStr = (str, outputLength, customSalt, algorithm) => {
    return crypto.pbkdf2Sync(str, customSalt ?? crypto.randomBytes(16), 100000, outputLength, algorithm ?? 'sha512');
};
exports.stretchStr = stretchStr;
// call strtch
/*
const salt: Buffer = generateRandomBytes(16);
const pwStretched: string = stretchStr(
    dto.password,
    32,
    salt,
    'sha512'
).toString('hex');
*/
//# sourceMappingURL=Encryption.js.map