import { Logger } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server, ServerOptions, Socket } from 'socket.io';

export class SocketAdapter extends IoAdapter {
  private readonly logger: Logger = new Logger(SocketAdapter.name);

  createIOServer(port: number, options?: ServerOptions): any {
    const server: Server = super.createIOServer(port, {
      ...options,
      cors: true,
    });

    // const redisAdapter = createAdapter({});

    // server.adapter();

    server.use(async (socket: Socket & { user?: any }, next) => {
      const tokenPayload: string = socket.handshake?.auth?.token;
      if (!tokenPayload) {
        this.logger.error('Token not provided');

        return next(new Error('Token not provided'));
      }

      const [method, token] = tokenPayload.split(' ');
      if (method !== 'Bearer') {
        this.logger.error(
          'Invalid authentication method, only Bearer is supported',
        );

        return next(
          new Error('Invalid authentication method, only Bearer is supported'),
        );
      }

      try {
        socket.user = {};

        return next();
      } catch (error) {
        this.logger.error('Authentication error, invalid credentials');

        return next(new Error('Authentication error, invalid credentials'));
      }
    });

    return server;
  }
}
