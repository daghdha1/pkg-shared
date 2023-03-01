import { OnModuleInit } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
export declare class KafkaModule implements OnModuleInit {
    private readonly kafkaClient;
    constructor(kafkaClient: ClientKafka);
    onModuleInit(): Promise<void>;
}
