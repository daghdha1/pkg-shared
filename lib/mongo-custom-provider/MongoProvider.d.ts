import { MongoConfiguration } from './MongoConfiguration';
import { MongoClient, ObjectId } from 'mongodb';
export declare const MongoProvider: (config: MongoConfiguration) => Promise<MongoClient>;
export declare function getObjectId(id: string): ObjectId;
export declare function getIdFromObjectId(obj: ObjectId): string;
