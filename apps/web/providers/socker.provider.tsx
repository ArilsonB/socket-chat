import { Socket } from "socket.io-client";
import { socket } from "../libs/socket";
import { useEffect, useState } from "react";

type SocketProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return <>{children}</>;
};
