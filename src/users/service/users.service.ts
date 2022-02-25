import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../database/service/prima.service';
import DTO_USER_CREATE from '../dtos/RegisterDto';
import { UpdateProfile } from '../dtos/updateProfileDto';

@Injectable()
export default class file_USERS_SERVICE {
    constructor(private readonly prisma: PrismaService) {}

    User_create(data: DTO_USER_CREATE) {
        return this.prisma.user.create({ data });
    }

    create(email: string, password: string) {
        return this.prisma.user.create({
            data: { email: email, password: password },
        });
    }
    // UserId is predefined by prisma
    UserProfile_find(id: string) {
        this.prisma.profile.findUnique({ where: { userId: id } });
    }

    Profile_Update(id: number, data: UpdateProfile) {
        return this.prisma.profile.update({ where: { id }, data });
    }

    // Find Posts of User in Array (res => Posts["ex","ex2"]) with a predefined schema in prisma Post
    UniquePost_Get(id: string) {
        return this.prisma.post.findMany({ where: { authorId: id } });
    }

    //Prisma client ref  : https://www.prisma.io/docs/reference/api-reference/prisma-client-reference
    UserUnique_find(where: Prisma.UserWhereUniqueInput) {
        return this.prisma.user.findUnique({ where });
    }

    AllUsers_find() {
        return this.prisma.user.findMany();
    }
}
