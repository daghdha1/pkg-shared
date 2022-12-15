export type MysqlKnexConfiguration = {
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
export declare const mysqlKnex: import("knex").Knex<any, unknown[]>;
export declare const MysqlKnexProvider: (config: MysqlKnexConfiguration) => Promise<import("knex").Knex<any, unknown[]>>;
