import {IsDefined, IsString} from "class-validator";

export class TrackingStatusEnqueueEvent {
 @IsDefined()
 @IsString()
 event: string;
 @IsDefined()
 @IsString()
 trackingNumber: string;
}
