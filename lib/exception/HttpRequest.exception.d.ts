import { BaseException } from './Base.exception';
export declare class HttpRequestException extends BaseException {
    readonly message: string;
    constructor(message: string, method: string, headers: any, body?: {});
}
