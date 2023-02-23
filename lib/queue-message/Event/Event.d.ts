import { QueueMessagePayload, QueueMessage } from "../QueueMessage";
export declare class DomainEventPayload extends QueueMessagePayload {
}
export declare abstract class DomainEvent<T extends DomainEventPayload> extends QueueMessage<T> {
    protected readonly _messageType = "event";
}
