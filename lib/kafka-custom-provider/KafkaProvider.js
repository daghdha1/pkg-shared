"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaProvider = void 0;
const kafkajs_1 = require("kafkajs");
const app_constants_1 = require("../app.constants");
exports.KafkaProvider = new kafkajs_1.Kafka({
    clientId: app_constants_1.appConstants.appName,
    brokers: ["localhost:9094"],
    logLevel: kafkajs_1.logLevel.ERROR,
});
//# sourceMappingURL=KafkaProvider.js.map