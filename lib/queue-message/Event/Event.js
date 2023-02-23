"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEvent = exports.DomainEventPayload = void 0;
const QueueMessage_1 = require("../QueueMessage");
class DomainEventPayload extends QueueMessage_1.QueueMessagePayload {
}
exports.DomainEventPayload = DomainEventPayload;
class DomainEvent extends QueueMessage_1.QueueMessage {
    constructor() {
        super(...arguments);
        this._messageType = "event";
    }
}
exports.DomainEvent = DomainEvent;
//# sourceMappingURL=Event.js.map