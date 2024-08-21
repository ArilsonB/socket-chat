"use client";
import { useSocket } from "../../hooks/use-socket.hook";
import { ChatInput } from "./components/chat-input";

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
        <div className="flex flex-col flex-1">
          <div className="flex-1 bg-amber-300"></div>
          <div className="flex items-cente px-8 py-4 flex-row h-24 bg-green-400">
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
