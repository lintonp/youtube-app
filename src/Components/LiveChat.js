import React, { useEffect, useState } from "react";
import LiveChatSingle from "./LiveChatSingle";
import { generateRandomName, generateRandomString } from "../Utils/Helpers";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Store/ChatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveChat = useSelector((store) => store.chat.messages);
  const [chatMessage, setChatMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(20),
        })
      );
    }, 5000);
    return () => {
      clearInterval(interval);
      //   dispatch(clearMessages());
    };
  });

  const handleLiveChatMessage = () => {
    dispatch(addMessage({ name: "UserName", message: chatMessage }));
    setChatMessage("");
  };

  return (
    <div>
      <h2 className="ml-4 justify-center font-semibold">Live Chat</h2>
      <div className="mx-2 p-2 bg-slate-50 shadow-md w-full h-[425px] overflow-y-scroll flex flex-col divide-y divide-slate-200">
        {liveChat.map((item, index) => (
          <LiveChatSingle key={index} name={item.name} message={item.message} />
        ))}
        {/* <LiveChatSingle
        name="Linton Pereira"
        message="Hey there, I am using live Chat!"
      />
      <LiveChatSingle name="Quinton Pereira" message="Cool Feature!" /> */}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-2 h-[25px]"
      >
        <input
          type="text"
          className="ml-2 p-2 w-[230px] border border-hidden"
          value={chatMessage}
          placeholder="Say Something..."
          onChange={(e) => setChatMessage(e.target.value)}
        />
        <button onClick={handleLiveChatMessage} className="ml-1 p-1">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
