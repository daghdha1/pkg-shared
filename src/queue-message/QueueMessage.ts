import {plainToInstance} from "class-transformer";
import {validateSync} from "class-validator";
import {randomUUID} from "crypto";
import {InvalidPayloadException} from "./InvalidPayload.exception";

export class QueueMessagePayload {}

export class QueueMessageHeaders {
 id: string;
 type: string;
 version: string;
 createdAt: string;
 className?: string;
 hostname?: string;
}

export abstract class QueueMessage<T = QueueMessagePayload> {
 protected readonly _vendor: string = "";
 protected readonly _version: string = "1";
 protected readonly _service: string;
 protected readonly _messageType: string;
 protected readonly _entity: string;
 protected readonly _action: string;
 protected abstract getPayloadClass(): any;

 protected _headers: QueueMessageHeaders;
 protected _payload: T;
 protected _id: string;
 protected _createdAt: Date;

 constructor(payload?: T, headers?: QueueMessageHeaders) {
  this._payload = payload;
  this._headers = headers;
  this._id = this._headers ? this._headers.id : randomUUID();
  this._createdAt = this._headers ? new Date(this._headers.createdAt) : new Date();
  this._version = this._headers ? this._headers.version : "1";
 }

 public validatePayload() {
  const payloadClass = this.getPayloadClass();
  const payloadInstance: any = plainToInstance(payloadClass, this.payload);
  const errors = validateSync(payloadInstance);
  if (errors.length) {
   throw new InvalidPayloadException(payloadClass.prototype.constructor.name);
  }
 }

 public get topic(): string {
  const topicParts = [this.vendor, this.service, this.messageType, this.entity];
  return topicParts.filter(Boolean).join(".");
 }

 public static getTopic(): string {
  return this.getTopicByMessageClass(this);
 }

 protected static getTopicByMessageClass(messageClass: any): string {
  return new messageClass().topic;
 }

 public get type(): string {
  const messageTypeParts = [
   this.vendor,
   this.service,
   this.messageType,
   this.entity,
   this.action,
   this.version == "1" ? "" : this.version,
  ];
  return messageTypeParts.filter(Boolean).join(".");
 }

 public static getType(): string {
  return this.getTypeByMessageClass(this);
 }

 protected static getTypeByMessageClass(messageClass: any): string {
  return new messageClass().type;
 }

 protected get vendor(): string {
  return this._vendor;
 }

 protected get service(): string {
  return this._service;
 }

 public get version(): string {
  return this._version;
 }

 protected get messageType(): string {
  return this._messageType;
 }

 protected get entity(): string {
  return this._entity;
 }

 protected get action(): string {
  return this._action;
 }

 public get id(): string {
  return this._id;
 }

 public get createdAt(): Date {
  return this._createdAt;
 }

 public get payload(): T {
  // return this._payload;
  return Object.assign({}, this._payload);
 }

 public get value(): string {
  return JSON.stringify(this.payload);
 }

 public get headers(): QueueMessageHeaders {
  if (!this._headers) {
   this.initHeaders();
  }
  // return this._headers;
  return Object.assign({}, this._headers);
 }

 protected initHeaders(): void {
  this._headers = {
   id: this.id,
   type: this.type,
   version: this.version,
   createdAt: this.createdAt.toISOString(),
   className: this.constructor.name,
   hostname: process.env.HOSTNAME ?? "undefined",
  };
 }

 protected static deserializeByEventClass(
  messageString: string,
  messageMetadata: QueueMessageHeaders,
  messageClass: any
 ): any {
  const messagePayload: QueueMessagePayload = JSON.parse(messageString);
  return new messageClass(messagePayload, messageMetadata);
 }

 public static deserialize(messageString: string, messageMetadata: QueueMessageHeaders) {
  return this.deserializeByEventClass(messageString, messageMetadata, this);
 }

 public abstract get key(): string;
}
