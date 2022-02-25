import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { UpdateProfile } from '../dtos/updateProfileDto';
import file_USERS_SERVICE from '../service/users.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
    constructor(private readonly USERS_SERVICE: file_USERS_SERVICE) {}

    // Call of function in the usersService file to parse the Id (ex : http://localhost:3000/api/v1/1/Posts), res  => { posts: Post[] }
    @Get(':id/posts')
    PostById_find(@Param('id') id: string) {
        return this.USERS_SERVICE.UniquePost_Get(id);
    }

    // Do the same but return the profile (ex : http://localhost:3000/api/v1/1/Profile); res => { profile: Profile[] }
    @Get(':id/profile')
    ProfileById_find(@Param('id') id: string) {
        return this.USERS_SERVICE.UserProfile_find(id);
    }

    @Patch(':id/profile')
    update(@Param('id') id: string, @Body() data: UpdateProfile) {
        return this.USERS_SERVICE.Profile_Update(JSON.parse(id), data);
    }
}
