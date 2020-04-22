/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap(): Promise<any> {
  const app = await NestFactory.create(AppModule);
  const port = process.env["PORT"] || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://0.0.0.0:' + port);
  });
}

bootstrap();
