import { Transport } from "@nestjs/microservices";
export type KafkaConfigurationType = {
    name: string;
    transport: Transport.KAFKA;
    options: {
        client: KafkaClientConfigurationType;
        consumer?: KafkaConsumerConfigurationType;
        subscribe?: KafkaSubscriberConfigurationType;
    };
};
export type KafkaClientConfigurationType = {
    clientId: string;
    brokers: string[];
    logLevel?: number;
};
export type KafkaConsumerConfigurationType = {
    groupId: string;
};
export type KafkaSubscriberConfigurationType = {
    fromBeginning: boolean;
};
