"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestException = void 0;
const Base_exception_1 = require("./Base.exception");
class HttpRequestException extends Base_exception_1.BaseException {
    constructor(message, method, headers, body = {}) {
        super(`${message} [METHOD=${method}] [HEADERS=${JSON.stringify(headers)}] [body=${body}]`, null, 404);
        this.message = message;
    }
}
exports.HttpRequestException = HttpRequestException;
//# sourceMappingURL=HttpRequest.exception.js.map