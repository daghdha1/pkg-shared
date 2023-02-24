"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPayloadException = void 0;
const exception_1 = require("../../exception");
class InvalidPayloadException extends exception_1.BaseException {
    constructor(className) {
        super("Invalid event/command payload", "Invalid event/command payload of ${className} instance", { className });
    }
}
exports.InvalidPayloadException = InvalidPayloadException;
//# sourceMappingURL=InvalidPayload.exception.js.map