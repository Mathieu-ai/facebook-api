import { Module } from '@nestjs/common';
import { file_User_Module } from './users/users.module';
import { file_DB_Module } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
    imports: [file_User_Module, file_DB_Module, AuthModule, PostsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
