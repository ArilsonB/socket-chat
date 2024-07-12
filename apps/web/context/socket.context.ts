"use client";
import { createContext } from "react";
import { Socket } from "socket.io-client";

export type SocketContextProps = Socket | undefined;
export const SocketContext = createContext<SocketContextProps>(undefined);