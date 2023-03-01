import {Module} from "@nestjs/common";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {Provider} from "../app.constants";

@Module({
 imports: [
  ClientsModule.register([
   {
    name: Provider.KafkaProducer,
    transport: Transport.KAFKA,
    options: {
     client: {
      clientId: "tl-producer",
      brokers: ["localhost:9094"],
      logLevel: 1,
     },
     producerOnlyMode: true,
     producer: {
      allowAutoTopicCreation: false,
     },
    },
   },
   {
    name: Provider.KafkaConsumer,
    transport: Transport.KAFKA,
    options: {
     client: {
      clientId: "tl-consumer",
      brokers: ["localhost:9094"],
      logLevel: 1,
     },
     consumer: {
      groupId: "tl-consumer",
     },
     subscribe: {
      fromBeginning: false,
     },
    },
   },
  ]),
 ],
 exports: [ClientsModule],
})
export class KafkaModule {}
