import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import file_USERS_SERVICE from 'src/users/service/users.service';
import User_Login from 'src/auth/dtos/LoginDto';
import { hash } from 'bcrypt';

@Injectable()
export default class file_AUTH_SERVICE {
    constructor(private readonly USERS_SERVICE: file_USERS_SERVICE) {}

    async User_login({ email, password }: User_Login): Promise<User> {
        const user = await this.USERS_SERVICE.UserUnique_find({ email });
        if (user || user.password == password) {
            return user;
        } else throw new HttpException("Can't access", HttpStatus.UNAUTHORIZED);
    }

    async User_register({ email, password }: User_Login) {
        const psw_hashed = await hash(password, 10);
        return this.USERS_SERVICE.create(email, psw_hashed);
    }
}
