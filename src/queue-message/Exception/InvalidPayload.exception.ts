import {BaseException} from "../../exception";

export class InvalidPayloadException extends BaseException {
 constructor(className: string) {
  super("Invalid event/command payload", "Invalid event/command payload of ${className} instance", {className});
 }
}
