import { IsNotEmpty, IsString } from 'class-validator';
export class UpdatePostDto {
    @IsNotEmpty()
    @IsString()
    authorId?: string;

    @IsNotEmpty()
    @IsString()
    message?: string;
}
