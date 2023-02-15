import {IsDefined, IsString} from "class-validator";
import {DomainEvent, DomainEventPayload} from "../Event";

export class TrackEnqueueEventPayload extends DomainEventPayload {
 @IsDefined()
 @IsString()
 event: string;
 @IsDefined()
 @IsString()
 trackingId: string;
}

export class TrackEnqueueEvent<T extends TrackEnqueueEventPayload> extends DomainEvent<T> {
 protected readonly _service = "tracking";
 protected readonly _entity = "track";
 protected readonly _action = "enqueue";

 public get key(): string {
  return this._payload.trackingId;
 }

 protected getPayloadClass() {
  return TrackEnqueueEventPayload;
 }
}
