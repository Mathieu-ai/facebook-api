import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import RegisterDto from 'src/users/dtos/RegisterDto';
import { AuthGuard } from '@nestjs/passport';
import LoginDto from '../dtos/LoginDto';
import file_AUTH_SERVICE from '../service/auth.service';

@Controller('auth')
export default class file_AUTH_CONTROLLER {
    constructor(private readonly authenticationService: file_AUTH_SERVICE) {}

    @Post('login')
    Login(@Body() authController: LoginDto) {
        return this.authenticationService.User_login(authController);
    }

    @Post('register')
    Register(@Body() authController: RegisterDto) {
        return this.authenticationService.User_register(authController);
    }
}
