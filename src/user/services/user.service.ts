import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../database/services/prisma.service';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    create(data: CreateUserDto) {
        return this.prisma.user.create({ data });
    }

    findUnique(where: Prisma.UserWhereUniqueInput) {
        return this.prisma.user.findUnique({ where });
    }
}
