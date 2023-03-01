import {Module} from "@nestjs/common";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {Provider} from "../app.constants";
import {KafkaConstants} from "./Kafka.constants";

@Module({
 imports: [
  ClientsModule.register([
   {
    name: Provider.KafkaProducer,
    transport: Transport.KAFKA,
    options: {
     client: {
      clientId: KafkaConstants.kafkaProducerId,
      brokers: KafkaConstants.brokers,
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
      clientId: KafkaConstants.kafkaConsumerId,
      brokers: KafkaConstants.brokers,
      logLevel: 1,
     },
     consumer: {
      groupId: KafkaConstants.kafkaConsumerId,
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
