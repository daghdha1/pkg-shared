import { IsDefined, IsString } from 'class-validator';
import { DomainEvent, DomainEventPayload } from '../Event';

export class TrackingParcellabHookEnqueueEventPayload extends DomainEventPayload {
    @IsDefined()
    @IsString()
    event: string;
    @IsDefined()
    @IsString()
    trackingId: string;
}

export class TrackingParcellabHookEnqueueEvent<
    T extends TrackingParcellabHookEnqueueEventPayload,
> extends DomainEvent<T> {
    protected readonly _service = 'logistic';
    protected readonly _entity = 'tracking.parcellab.hook.enqueue';
    protected readonly _action = 'enqueue';

    public get key(): string {
        return this._payload.trackingId;
    }

    protected getPayloadClass() {
        return TrackingParcellabHookEnqueueEventPayload;
    }
}