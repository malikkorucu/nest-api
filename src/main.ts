import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DbExceptionFilter } from './middleware/DbExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('My Api Example').setDescription('The api description').setVersion('1.0').addBearerAuth().build();

  const document = SwaggerModule.createDocument(app, config);

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new DbExceptionFilter());

  SwaggerModule.setup('doc', app, document);

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
