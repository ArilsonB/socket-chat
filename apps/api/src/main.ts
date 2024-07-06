import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SocketAdapter } from './infra/adapters/socket.adapter';

async function bootstrap() {
  const logger = new Logger('Main');

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const config = app.get<ConfigService>(ConfigService);

  app.useWebSocketAdapter(new SocketAdapter(app));

  const port = 3001;

  await app.listen(port, '0.0.0.0', async () =>
    logger.log(`Server running at: ${await app.getUrl()}`),
  );
}
bootstrap()
