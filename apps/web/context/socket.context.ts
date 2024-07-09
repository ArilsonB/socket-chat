import { createContext, use, useContext } from "react";
import { Socket } from "socket.io-client";

export type SocketContextProps = {
  socket: Socket | null;
};

export const SocketContext = createContext<SocketContextProps>({
  socket: null,
});
