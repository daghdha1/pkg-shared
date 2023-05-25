import {IsArray, IsBoolean, IsDefined, IsOptional, IsString} from "class-validator";

export class TrackingStatusCreatedEvent {
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
 trackingLink: string;
 @IsDefined()
 @IsString()
 phone: string;
 @IsDefined()
 @IsString()
 email: string;
 @IsDefined()
 @IsString()
 recipient: string;
 @IsDefined()
 @IsBoolean()
 inQueue: boolean;

 @IsOptional()
 @IsString()
 orderNo: string;
 @IsOptional()
 @IsString()
 recipientNotification: string;
 @IsOptional()
 @IsArray()
 notificationPlatform: string[];
 @IsOptional()
 @IsString()
 language: string;
}
