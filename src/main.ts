import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  await app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on: ${port}`);
  });
}
bootstrap();
