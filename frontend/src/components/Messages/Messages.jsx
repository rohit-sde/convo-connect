import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  // console.log(messages, messages.length);
  const noofskeletons = messages.length;
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [messages]);
  return (
    <div className="pl-4 flex-1 overflow-auto">
      {loading &&
        Array.from({ length: noofskeletons }).map((_, index) => (
          <MessageSkeleton key={index} />
        ))}
      {!loading &&
        noofskeletons > 0 &&
        messages.map((message) => {
          return (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          );
        })}
      {!loading && noofskeletons === 0 && (
        <div className="flex items-center justify-center h-full text-center text-gray-500">
          <p className="italic">
            &quot;No messages yet. Start the conversation and break the
            silence!&quot;
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
