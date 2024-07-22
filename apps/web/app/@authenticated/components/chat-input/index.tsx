import { useState } from "react";

export const ChatInput = () => {
  const [value, setValue] = useState("");

  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      rows={1}
      className="bg-white border-none overflow-hidden rounded-l-xl h-12 p-3 flex-1 outline-0"
    ></textarea>
  );
};
