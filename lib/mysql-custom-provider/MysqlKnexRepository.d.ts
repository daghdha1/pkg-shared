import { MysqlRepositoryConfiguration } from './MysqlConfiguration';
import { Knex } from 'knex';
export declare abstract class MysqlKnexRepository {
    protected readonly pool: Knex;
    private readonly configuration;
    constructor(pool: Knex, configuration: MysqlRepositoryConfiguration);
}
