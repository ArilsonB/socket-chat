import { io, Socket } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { SocketContext } from "../context/socket.context";

type SocketProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [isConnected, setIsConnected] = useState(false);
  // const [socket, setSocket] = useState<Socket>(null as unknown as Socket)

  const socket = useRef<Socket>();

  const URL =
    process.env.NODE_ENV === "production"
      ? (undefined as unknown as string)
      : "http://localhost:3001";

  useEffect(() => {
    if (!isConnected) {
      socket.current = io(URL, {
        autoConnect: false,
        transports: ["websocket"],
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        auth: { token: "Bearer token" },
      });

      socket.current.on("connect", () => {
        setIsConnected(true);

        console.log("Connected to server", socket.current?.id);
      });

      socket.current.on("disconnect", () => {
        setIsConnected(false);
      });

      socket.current.connect();
    }

    return () => {
      if (socket.current) {
        socket.current.off("connect");
        socket.current.off("disconnect");
        if (socket.current.connected) socket.current.disconnect();
        socket.current.close();
      }
    };
  }, []);

  return (
    <SocketContext.Provider value={socket.current}>
      {children}
    </SocketContext.Provider>
  );
};
