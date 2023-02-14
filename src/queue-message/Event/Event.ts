import {QueueMessagePayload, QueueMessage} from "../QueueMessage";

export class DomainEventPayload extends QueueMessagePayload {}

export abstract class DomainEvent<T extends DomainEventPayload> extends QueueMessage<T> {
 protected readonly _messageType = "event";
}
