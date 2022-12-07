import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from 'process';

async function bootstrap() {
    const port = env.PORT || 4321;
    const app = await NestFactory.create(AppModule);
    await app.listen(port, '0.0.0.0', () => {
      console.log(`Listening on: ${port}`);
    });
  }
bootstrap();