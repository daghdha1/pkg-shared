import { MysqlConfiguration } from './MysqlConfiguration';
import * as mysql from 'mysql2/promise';
export declare const MysqlProvider: (config: MysqlConfiguration) => Promise<mysql.Pool>;
