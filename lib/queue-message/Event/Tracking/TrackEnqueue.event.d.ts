import { DomainEvent, DomainEventPayload } from "../Event";
export declare class TrackEnqueueEventPayload extends DomainEventPayload {
    event: string;
    trackingId: string;
}
export declare class TrackEnqueueEvent<T extends TrackEnqueueEventPayload> extends DomainEvent<T> {
    protected readonly _service = "tracking";
    protected readonly _entity = "track";
    protected readonly _action = "enqueue";
    get key(): string;
    protected getPayloadClass(): typeof TrackEnqueueEventPayload;
}
