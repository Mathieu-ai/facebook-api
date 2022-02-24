import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const port = Number(process.env.PORT) || 6660;

    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(port);
    console.log(`server is running on port ${await app.getUrl()}`);
}
bootstrap();
