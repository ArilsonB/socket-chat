"use client";
import { useSocket } from "../../hooks/use-socket.hook";

const Home = () => {
  const socket = useSocket();

  return (
    <div className="flex flex-col h-full">
      <div className="flex h-16 w-full bg-blue-400">
        <div className="container w-full mx-auto px-4">
          <h1 className="font-bold text-white uppercase">Authenticated</h1>
        </div>
      </div>
      <div className="flex flex-row h-full">
        <div className="flex w-72 h-full bg-red-400">aaa</div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
