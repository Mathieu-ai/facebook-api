import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/service/prima.service';
import { CreatePostDto } from 'src/posts/dtos/CreatePostDto';
import { UpdatePostDto } from '../dtos/UpdatePostDto';

@Injectable()
export class PostsService {
    constructor(private readonly prisma: PrismaService) {}

    Post_create(data: CreatePostDto) {
        return this.prisma.post.create({ data });
    }

    Post_update(id: number, data: UpdatePostDto) {
        return this.prisma.post.update({ where: { id }, data });
    }

    Post_findOne(id: number) {
        return this.prisma.post.findUnique({ where: { id } });
    }

    Post_findMany() {
        return this.prisma.post.findMany();
    }

    Post_delete(id: number) {
        return this.prisma.post.delete({ where: { id } });
    }
}
