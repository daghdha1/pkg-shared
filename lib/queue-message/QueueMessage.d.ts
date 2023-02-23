export declare class QueueMessagePayload {
}
export declare class QueueMessageHeaders {
    id: string;
    type: string;
    version: string;
    createdAt: string;
    className?: string;
    hostname?: string;
}
export declare abstract class QueueMessage<T = QueueMessagePayload> {
    protected readonly _vendor: string;
    protected readonly _version: string;
    protected readonly _service: string;
    protected readonly _messageType: string;
    protected readonly _entity: string;
    protected readonly _action: string;
    protected abstract getPayloadClass(): any;
    protected _headers: QueueMessageHeaders;
    protected _payload: T;
    protected _id: string;
    protected _createdAt: Date;
    constructor(payload?: T, headers?: QueueMessageHeaders);
    validatePayload(): void;
    get topic(): string;
    static getTopic(): string;
    protected static getTopicByMessageClass(messageClass: any): string;
    get type(): string;
    static getType(): string;
    protected static getTypeByMessageClass(messageClass: any): string;
    protected get vendor(): string;
    protected get service(): string;
    get version(): string;
    protected get messageType(): string;
    protected get entity(): string;
    protected get action(): string;
    get id(): string;
    get createdAt(): Date;
    get payload(): T;
    get value(): string;
    get headers(): QueueMessageHeaders;
    protected initHeaders(): void;
    protected static deserializeByEventClass(messageString: string, messageMetadata: QueueMessageHeaders, messageClass: any): any;
    static deserialize(messageString: string, messageMetadata: QueueMessageHeaders): any;
    abstract get key(): string;
}
