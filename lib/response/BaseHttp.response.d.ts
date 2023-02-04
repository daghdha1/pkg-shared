import { HttpResponse } from "./HttpResponse";
export declare abstract class BaseHttpResponse {
    protected success(data: any, params?: {
        messages?: string | string[];
    }): HttpResponse;
}
