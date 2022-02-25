import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export default class User_Login {
    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}

// Other Method => PickType (https://docs.nestjs.com/openapi/mapped-types)
// NOTE Use it later for testing purposes

// import { PickType } from '@nestjs/mapped-types';
// import DTO_USER_CREATE from 'src/users/dtos/RegisterDto';

// export class User_Login_PT extends PickType(DTO_USER_CREATE, [
//     'email',
//     'password',
// ] as const) {}
