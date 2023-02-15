import {IsDate, IsDefined, IsNumber, IsOptional, IsString} from "class-validator";
import {DomainEvent, DomainEventPayload} from "../Event";

export class TrackCreatedEventPayload extends DomainEventPayload {
 @IsDefined()
 @IsString()
 event: string;
 @IsDefined()
 @IsString()
 eventId: string;
 @IsDefined()
 @IsDate()
 dateCreate: Date;
 @IsDefined()
 @IsString()
 trackingId: string;
 @IsDefined()
 @IsNumber()
 orderId: number;
 @IsOptional()
 @IsNumber()
 shopId: number;
 @IsOptional()
 @IsNumber()
 langId: number;
 @IsOptional()
 @IsString()
 "message-short": string;
 @IsOptional()
 @IsString()
 "message-long": string;
}

export class TrackCreatedEvent<T extends TrackCreatedEventPayload> extends DomainEvent<T> {
 protected readonly _service = "tracking";
 protected readonly _entity = "track";
 protected readonly _action: string = "created";

 public get key(): string {
  return this._payload.trackingId;
 }

 protected getPayloadClass() {
  return TrackCreatedEventPayload;
 }
}
