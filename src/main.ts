import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'generate-openapi-spec') {
    await generateOpenAPISpec(app);
    await app.close();
  } else {
    await app.listen(3000);
  }
}

async function generateOpenAPISpec(app: INestApplication): Promise<void> {
  const builder = new DocumentBuilder()
    .setTitle('Test')
    .setDescription('Simple repository to test the nullable enum export')
    .setVersion('1.0.0');

  const openAPIObject = SwaggerModule.createDocument(app, builder.build());

  await writeFile(
    join(__dirname, '../openapi.json'),
    JSON.stringify(openAPIObject, null, 2),
    'utf8',
  );
}

bootstrap();
