import { TypeOrmModule } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModule = {
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '0123456',
    database: "nestjs",
    entities:[__dirname + '/../**/*.entity{.ts,.js}',],
    synchronize: true,
};