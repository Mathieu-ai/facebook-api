import { Module } from '@nestjs/common';
import { PrismaService } from './service/prima.service';

@Module({
    exports: [PrismaService],
    providers: [PrismaService],
})
export class file_DB_Module {}
