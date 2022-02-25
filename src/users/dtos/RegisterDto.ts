import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export default class DTO_USER_CREATE {
    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
