"use client";

import { SocketProvider } from "./socker.provider";

type ProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const Providers = ({ children }: ProviderProps) => {
  return <SocketProvider>{children}</SocketProvider>;
};
