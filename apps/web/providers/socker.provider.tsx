import { io, Socket } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { SocketContext } from "../context/socket.context";

type SocketProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export type SocketConnectionStatus =
  | "connecting"
  | "connected"
  | "re-connecting"
  | "closed";

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

        socket.current?.emit('recover_connected_users', async (users: any) => {

          console.log(users)
        })
      });

      socket.current.on("disconnect", () => {
        setIsConnected(false);
      });

      socket.current.on("reconnect", (attempt) => {
        console.info("Reconnected on attempt: " + attempt);
        // setConnectionStatus("re-connecting");
        console.info("Retrying to get watchList ...");

        // socket.emit("retry_watchList", async (watchList: any[]) => {
        //   console.info("User handshake callback message received");
        // socketDispatch({
        //   type: "receive_watchList",
        //   payload: watchList,
        // });
        // });
      });

      socket.current.on("reconnect_attempt", (attempt) => {
        console.info("Reconnection Attempt: " + attempt);
      });

      socket.current.on("reconnect_error", (error) => {
        console.info("Reconnection error: " + error);
      });

      socket.current.on("reconnect_failed", () => {
        console.info("Reconnection failure.");
        alert(
          "We are unable to connect you to the watchList service.  Please make sure your internet connection is stable and try again."
        );
        setIsConnected(false);
      });

      socket.current.connect();
    }

    return () => {
      if (socket.current) {
        socket.current.off("connect");
        socket.current.off("disconnect");
        socket.current.off("reconnect");
        socket.current.off("reconnect_attempt");
        socket.current.off("reconnect_failed");
        socket.current.off("reconnect_error");
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
