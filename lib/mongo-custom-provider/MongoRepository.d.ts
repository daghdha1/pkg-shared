import { MongoRepositoryConfiguration } from './MongoConfiguration';
import { MongoClient } from 'mongodb';
export declare abstract class MongoRepository {
    protected readonly pool: MongoClient;
    private readonly configuration;
    constructor(pool: MongoClient, configuration: MongoRepositoryConfiguration);
}
