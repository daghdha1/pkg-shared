import {Injectable} from "@nestjs/common";
import {ClientKafka, MessagePattern, Payload} from "@nestjs/microservices";
import {KafkaMessage} from "@nestjs/microservices/external/kafka.interface";
import {Observable} from "rxjs";

@Injectable()
export class KafkaService {
/*  private client: ClientKafka;

 constructor() {
  this.client = new ClientKafka({});
 }

 async onModuleInit() {
  await this.client.connect();
 }

 async sendMessage(topic: string, message: any): Promise<void> {
  await this.client.emit(topic, message).toPromise();
 }

 @MessagePattern("my-topic")
 consumeMessage(@Payload() message: KafkaMessage): Observable<any> {
  return new Observable((observer) => {
   observer.next(message);
  });
 } */
}
