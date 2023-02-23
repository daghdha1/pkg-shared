import { DomainEvent, DomainEventPayload } from "../Event";
export declare class TrackCreatedEventPayload extends DomainEventPayload {
    event: string;
    eventId: string;
    dateCreate: Date;
    trackingId: string;
    orderId: number;
    shopId: number;
    langId: number;
    "message-short": string;
    "message-long": string;
}
export declare class TrackCreatedEvent<T extends TrackCreatedEventPayload> extends DomainEvent<T> {
    protected readonly _service = "tracking";
    protected readonly _entity = "track";
    protected readonly _action: string;
    get key(): string;
    protected getPayloadClass(): typeof TrackCreatedEventPayload;
}
