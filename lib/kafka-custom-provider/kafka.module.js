"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const Kafka_constants_1 = require("./Kafka.constants");
let KafkaModule = class KafkaModule {
};
KafkaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: "KAFKA_PRODUCER" /* Provider.KafkaProducer */,
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: Kafka_constants_1.KafkaConstants.kafkaProducerId,
                            brokers: Kafka_constants_1.KafkaConstants.brokers,
                            logLevel: Kafka_constants_1.KafkaConstants.logLevel,
                        },
                        producerOnlyMode: Kafka_constants_1.KafkaConstants.producerOnlyMode,
                        producer: {
                            allowAutoTopicCreation: Kafka_constants_1.KafkaConstants.allowAutoTopicCreation,
                        },
                    },
                },
                {
                    name: "KAFKA_CONSUMER" /* Provider.KafkaConsumer */,
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: Kafka_constants_1.KafkaConstants.kafkaConsumerId,
                            brokers: Kafka_constants_1.KafkaConstants.brokers,
                            logLevel: Kafka_constants_1.KafkaConstants.logLevel,
                        },
                        consumer: {
                            groupId: Kafka_constants_1.KafkaConstants.kafkaConsumerId,
                        },
                        subscribe: {
                            fromBeginning: Kafka_constants_1.KafkaConstants.fromBeginning,
                        },
                    },
                },
            ]),
        ],
        exports: [microservices_1.ClientsModule],
    })
], KafkaModule);
exports.KafkaModule = KafkaModule;
//# sourceMappingURL=kafka.module.js.map