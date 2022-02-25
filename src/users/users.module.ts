import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import USERS_SERVICE from './service/users.service';
import { file_DB_Module } from 'src/database/database.module';

@Module({
    imports: [file_DB_Module],
    exports: [USERS_SERVICE],
    controllers: [UsersController],
    providers: [USERS_SERVICE],
})
export class file_User_Module {}
