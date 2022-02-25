import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProfile {
    @IsNotEmpty()
    @IsString()
    firstName?: string;

    @IsNotEmpty()
    @IsString()
    lastName?: string;
}
