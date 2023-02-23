"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackCreatedEvent = exports.TrackCreatedEventPayload = void 0;
const class_validator_1 = require("class-validator");
const Event_1 = require("../Event");
class TrackCreatedEventPayload extends Event_1.DomainEventPayload {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackCreatedEventPayload.prototype, "event", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackCreatedEventPayload.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsDate)()
], TrackCreatedEventPayload.prototype, "dateCreate", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackCreatedEventPayload.prototype, "trackingId", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNumber)()
], TrackCreatedEventPayload.prototype, "orderId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)()
], TrackCreatedEventPayload.prototype, "shopId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)()
], TrackCreatedEventPayload.prototype, "langId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)()
], TrackCreatedEventPayload.prototype, "message-short", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)()
], TrackCreatedEventPayload.prototype, "message-long", void 0);
exports.TrackCreatedEventPayload = TrackCreatedEventPayload;
class TrackCreatedEvent extends Event_1.DomainEvent {
    constructor() {
        super(...arguments);
        this._service = "tracking";
        this._entity = "track";
        this._action = "created";
    }
    get key() {
        return this._payload.trackingId;
    }
    getPayloadClass() {
        return TrackCreatedEventPayload;
    }
}
exports.TrackCreatedEvent = TrackCreatedEvent;
//# sourceMappingURL=TrackCreated.event.js.map