"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseException = void 0;
class BaseException extends Error {
    constructor(title, detail, detailArgs, status = 400) {
        super(title);
        this.title = title;
        this.detail = detail;
        this.detailArgs = detailArgs;
        this.status = status;
        this.custom = true;
        this.timestamp = Date.now();
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.BaseException = BaseException;
//# sourceMappingURL=Base.exception.js.map