import { MysqlRepositoryConfiguration } from './MysqlConfiguration';
import * as mysql from 'mysql2/promise';
export declare abstract class MysqlRepository {
    protected readonly pool: mysql.Pool;
    private readonly configuration;
    constructor(pool: mysql.Pool, configuration: MysqlRepositoryConfiguration);
    protected select(query: string): Promise<any[]>;
    protected selectOne(query: string): Promise<any>;
    protected insert(query: any, values?: any[]): Promise<mysql.RowDataPacket[] | mysql.RowDataPacket[][] | mysql.OkPacket | mysql.OkPacket[] | mysql.ResultSetHeader>;
    protected update(query: any): Promise<[mysql.RowDataPacket[] | mysql.RowDataPacket[][] | mysql.OkPacket | mysql.OkPacket[] | mysql.ResultSetHeader, mysql.FieldPacket[]]>;
    protected delete(query: any): Promise<[mysql.RowDataPacket[] | mysql.RowDataPacket[][] | mysql.OkPacket | mysql.OkPacket[] | mysql.ResultSetHeader, mysql.FieldPacket[]]>;
}
