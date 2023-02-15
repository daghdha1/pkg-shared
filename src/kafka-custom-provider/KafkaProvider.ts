import {Kafka, logLevel} from "kafkajs";
import {appConstants} from "../app.constants";

export const KafkaProvider = new Kafka({
 clientId: appConstants.appName,
 brokers: ["localhost:9094"],
 logLevel: logLevel.ERROR,
});
