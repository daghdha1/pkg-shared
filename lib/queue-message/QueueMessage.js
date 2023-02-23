"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueMessage = exports.QueueMessageHeaders = exports.QueueMessagePayload = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const crypto_1 = require("crypto");
const InvalidPayload_exception_1 = require("./InvalidPayload.exception");
class QueueMessagePayload {
}
exports.QueueMessagePayload = QueueMessagePayload;
class QueueMessageHeaders {
}
exports.QueueMessageHeaders = QueueMessageHeaders;
class QueueMessage {
    constructor(payload, headers) {
        this._vendor = "";
        this._version = "1";
        this._payload = payload;
        this._headers = headers;
        this._id = this._headers ? this._headers.id : (0, crypto_1.randomUUID)();
        this._createdAt = this._headers ? new Date(this._headers.createdAt) : new Date();
        this._version = this._headers ? this._headers.version : "1";
    }
    validatePayload() {
        const payloadClass = this.getPayloadClass();
        const payloadInstance = (0, class_transformer_1.plainToInstance)(payloadClass, this.payload);
        const errors = (0, class_validator_1.validateSync)(payloadInstance);
        if (errors.length) {
            throw new InvalidPayload_exception_1.InvalidPayloadException(payloadClass.prototype.constructor.name);
        }
    }
    get topic() {
        const topicParts = [this.vendor, this.service, this.messageType, this.entity];
        return topicParts.filter(Boolean).join(".");
    }
    static getTopic() {
        return this.getTopicByMessageClass(this);
    }
    static getTopicByMessageClass(messageClass) {
        return new messageClass().topic;
    }
    get type() {
        const messageTypeParts = [
            this.vendor,
            this.service,
            this.messageType,
            this.entity,
            this.action,
            this.version == "1" ? "" : this.version,
        ];
        return messageTypeParts.filter(Boolean).join(".");
    }
    static getType() {
        return this.getTypeByMessageClass(this);
    }
    static getTypeByMessageClass(messageClass) {
        return new messageClass().type;
    }
    get vendor() {
        return this._vendor;
    }
    get service() {
        return this._service;
    }
    get version() {
        return this._version;
    }
    get messageType() {
        return this._messageType;
    }
    get entity() {
        return this._entity;
    }
    get action() {
        return this._action;
    }
    get id() {
        return this._id;
    }
    get createdAt() {
        return this._createdAt;
    }
    get payload() {
        // return this._payload;
        return Object.assign({}, this._payload);
    }
    get value() {
        return JSON.stringify(this.payload);
    }
    get headers() {
        if (!this._headers) {
            this.initHeaders();
        }
        // return this._headers;
        return Object.assign({}, this._headers);
    }
    initHeaders() {
        this._headers = {
            id: this.id,
            type: this.type,
            version: this.version,
            createdAt: this.createdAt.toISOString(),
            className: this.constructor.name,
            hostname: process.env.HOSTNAME ?? "undefined",
        };
    }
    static deserializeByEventClass(messageString, messageMetadata, messageClass) {
        const messagePayload = JSON.parse(messageString);
        return new messageClass(messagePayload, messageMetadata);
    }
    static deserialize(messageString, messageMetadata) {
        return this.deserializeByEventClass(messageString, messageMetadata, this);
    }
}
exports.QueueMessage = QueueMessage;
//# sourceMappingURL=QueueMessage.js.map