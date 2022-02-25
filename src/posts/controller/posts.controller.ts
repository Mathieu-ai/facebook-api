import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { CreatePostDto } from '../dtos/CreatePostDto';
import { UpdatePostDto } from '../dtos/UpdatePostDto';
import { PostsService } from '../service/posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    create(@Body() data: CreatePostDto) {
        return this.postsService.Post_create(data);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: UpdatePostDto) {
        return this.postsService.Post_update(JSON.parse(id), data);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.postsService.Post_findOne(JSON.parse(id));
    }

    @Get()
    findMany() {
        return this.postsService.Post_findMany();
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.postsService.Post_delete(JSON.parse(id));
    }
}
