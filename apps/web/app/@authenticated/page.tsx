"use client";
import { useSocket } from "../../hooks/use-socket.hook";

const Home = () => {
  const socket = useSocket();

  return <div>Your socket id: {socket?.id}</div>;
};

export default Home;
