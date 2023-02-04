"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseHttpResponse = void 0;
class BaseHttpResponse {
    success(data, params) {
        const response = {
            data: data ? data : {},
        };
        if (params?.messages) {
            response.messages = Array.isArray(params.messages) ? params.messages : [params.messages];
        }
        return response;
    }
}
exports.BaseHttpResponse = BaseHttpResponse;
//# sourceMappingURL=BaseHttp.response.js.map