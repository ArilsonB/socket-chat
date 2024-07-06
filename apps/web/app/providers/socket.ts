import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production"
    ? (undefined as unknown as string)
    : "http://localhost:3001";

export const socket = io(URL, { autoConnect: false });
