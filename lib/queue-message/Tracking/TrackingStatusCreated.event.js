"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingStatusCreatedEvent = void 0;
const class_validator_1 = require("class-validator");
class TrackingStatusCreatedEvent {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackingStatusCreatedEvent.prototype, "event", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackingStatusCreatedEvent.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackingStatusCreatedEvent.prototype, "timestamp", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackingStatusCreatedEvent.prototype, "courier", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackingStatusCreatedEvent.prototype, "trackingNumber", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackingStatusCreatedEvent.prototype, "trackingLink", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackingStatusCreatedEvent.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackingStatusCreatedEvent.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackingStatusCreatedEvent.prototype, "recipient", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsBoolean)()
], TrackingStatusCreatedEvent.prototype, "inQueue", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)()
], TrackingStatusCreatedEvent.prototype, "orderNo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)()
], TrackingStatusCreatedEvent.prototype, "recipientNotification", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)()
], TrackingStatusCreatedEvent.prototype, "notificationPlatform", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)()
], TrackingStatusCreatedEvent.prototype, "language", void 0);
exports.TrackingStatusCreatedEvent = TrackingStatusCreatedEvent;
//# sourceMappingURL=TrackingStatusCreated.event.js.map