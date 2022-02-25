import { Module } from '@nestjs/common';
import file_AUTH_SERVICE from './service/auth.service';
import file_AUTH_CONTROLLER from './controller/auth.controller';
import { file_DB_Module } from 'src/database/database.module';
import { file_User_Module } from 'src/users/users.module';

@Module({
    imports: [file_DB_Module, file_User_Module],
    controllers: [file_AUTH_CONTROLLER],
    providers: [file_AUTH_SERVICE],
})
export class AuthModule {}
