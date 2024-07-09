import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

@Injectable()
export class SocketService {
  private readonly connectedClients: Map<string, Socket> = new Map();

  handleConnection(socket: Socket): void {
    const clientId = socket.id;
    this.connectedClients.set(clientId, socket);

    socket.on('disconnect', () => {
      this.connectedClients.delete(clientId);
    });

    console.log(this.connectedClients.size);
    console.log(Array.from(this.connectedClients.values())[0].id);

    // Handle other events and messages from the client
  }

  // Add more methods for handling events, messages, etc.
}
