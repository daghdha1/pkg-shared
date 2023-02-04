import { MysqlRepositoryConfiguration } from './MysqlConfiguration';
import { Pool } from 'mysql2/promise';
export declare abstract class MysqlRepository {
    protected readonly pool: Pool;
    private readonly configuration;
    constructor(pool: Pool, configuration: MysqlRepositoryConfiguration);
    protected select(query: string): Promise<any[]>;
    protected selectOne(query: string): Promise<any>;
    protected insert(query: any, values?: any[]): Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader")>;
    protected update(query: any): Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
    protected delete(query: any): Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
}
