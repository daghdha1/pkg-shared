import {IsDefined, IsString} from "class-validator";

export class TrackCreatedEvent {
 @IsDefined()
 @IsString()
 event: string;
 @IsDefined()
 @IsString()
 eventId: string;
 @IsDefined()
 @IsString()
 timestamp: string;
 @IsDefined()
 @IsString()
 courier: string;
 @IsDefined()
 @IsString()
 trackingNumber: string;
 @IsDefined()
 @IsString()
 language: string;
 @IsDefined()
 @IsString()
 trackingLink: string;
}
