import { RedisClientType } from '@redis/client';
import { RedisRepositoryConfiguration } from './RedisConfiguration';
export declare abstract class RedisRepository {
    protected readonly pool: RedisClientType;
    private readonly configuration;
    constructor(pool: RedisClientType, configuration: RedisRepositoryConfiguration);
    protected exists(key: string): Promise<boolean>;
    protected get(key: string): Promise<string | undefined>;
    protected set(key: string, value: string, expiresIn: number): Promise<string>;
    protected del(key: string): Promise<boolean>;
}
