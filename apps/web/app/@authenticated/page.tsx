"use client";
import { useSocket } from "../../hooks/use-socket.hook";

const Home = () => {
  const socket = useSocket();

  return (
    <div>
      <div className="flex h-16 w-full">
        <div className="container w-full mx-auto px-4">
          <h1>Authenticated</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
