import { Module } from '@nestjs/common';
import { UserController } from './user/controllers/user.controller';

@Module({
    imports: [],
    controllers: [UserController],
})
export class AppModule {}
