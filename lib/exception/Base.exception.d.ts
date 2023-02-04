export declare abstract class BaseException extends Error {
    readonly title: string;
    readonly detail?: string;
    readonly detailArgs?: any;
    readonly status: number;
    readonly timestamp: number;
    readonly custom = true;
    constructor(title: string, detail?: string, detailArgs?: any, status?: number);
}
