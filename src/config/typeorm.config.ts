import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModuleOptions =  {
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '0123456',
    database: "nestjs",
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true,
};