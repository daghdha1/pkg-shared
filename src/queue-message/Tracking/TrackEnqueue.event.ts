import {IsDefined, IsString} from "class-validator";

export class TrackEnqueueEvent {
 @IsDefined()
 @IsString()
 event: string;
 @IsDefined()
 @IsString()
 trackingNumber: string;
}
