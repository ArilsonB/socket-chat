import { io, Socket } from "socket.io-client";
import { useEffect, useState } from "react";
import { SocketContext } from "../context/socket.context";

type SocketProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [isConnected, setIsConnected] = useState(false);

  const URL =
    process.env.NODE_ENV === "production"
      ? (undefined as unknown as string)
      : "http://localhost:3001";

  const socket = io(URL, {
    autoConnect: false,
    auth: { token: "Bearer token" },
  });

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);

      console.log("Connected to server", socket.id);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.connect();

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
