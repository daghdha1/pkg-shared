import { MysqlConfiguration } from './MysqlConfiguration';
export declare const queryBuilder: import("knex").Knex<any, unknown[]>;
export declare const MysqlKnexProvider: (config: MysqlConfiguration) => Promise<import("knex").Knex<any, unknown[]>>;
