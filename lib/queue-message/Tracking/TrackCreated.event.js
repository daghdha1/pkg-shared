"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackCreatedEvent = void 0;
const class_validator_1 = require("class-validator");
class TrackCreatedEvent {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackCreatedEvent.prototype, "event", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackCreatedEvent.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackCreatedEvent.prototype, "timestamp", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackCreatedEvent.prototype, "courier", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackCreatedEvent.prototype, "trackingNumber", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackCreatedEvent.prototype, "language", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], TrackCreatedEvent.prototype, "trackingLink", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsBoolean)()
], TrackCreatedEvent.prototype, "isConsumed", void 0);
exports.TrackCreatedEvent = TrackCreatedEvent;
//# sourceMappingURL=TrackCreated.event.js.map