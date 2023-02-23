import { HttpResponse } from "./HttpResponse.response";
export declare abstract class BaseHttpResponse {
    protected success(data: any, params?: {
        messages?: string | string[];
    }): HttpResponse;
}
