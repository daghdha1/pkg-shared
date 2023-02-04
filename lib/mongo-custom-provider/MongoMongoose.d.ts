export type MongoMongooseConfiguration = {
    database: string;
    user: string;
    port?: number;
    password: string;
    useNullAsDefault: boolean;
    host: string;
    maxConnections: number;
    minConnections?: number;
    name?: string;
};
export declare const MongoMongooseProvider: (config: MongoMongooseConfiguration) => Promise<import("knex").Knex<any, unknown[]>>;
