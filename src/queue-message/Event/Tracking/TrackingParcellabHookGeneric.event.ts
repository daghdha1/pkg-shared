import { IsDate, IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';
import { DomainEvent, DomainEventPayload } from '../Event';

export class TrackingParcellabHookGenericEventPayload extends DomainEventPayload {
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
    'message-short': string;
    @IsOptional()
    @IsString()
    'message-long': string;
}

export class TrackingParcellabHookGenericEvent<
    T extends TrackingParcellabHookGenericEventPayload,
> extends DomainEvent<T> {
    protected readonly _service = 'logistic';
    protected readonly _entity = 'tracking.parcellab.hook.generic';
    protected readonly _action: string = 'generic';

    public get key(): string {
        return this._payload.trackingId;
    }

    protected getPayloadClass() {
        return TrackingParcellabHookGenericEventPayload;
    }
}
