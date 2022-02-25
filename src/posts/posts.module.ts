import { Module } from '@nestjs/common';
import { file_DB_Module } from './../database/database.module';
import { PostsService } from './service/posts.service';
import { PostsController } from './controller/posts.controller';

@Module({
    imports: [file_DB_Module],
    providers: [PostsService],
    controllers: [PostsController],
})
export class PostsModule {}
