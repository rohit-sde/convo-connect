import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeleton/MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log(messages, messages.length);
  const noofskeletons = messages.length;

  return (
    <div className="pl-4 flex-1 overflow-auto">
      {loading &&
        Array.from({ length: noofskeletons }).map((_, index) => (
          <MessageSkeleton key={index} />
        ))}
      {!loading &&
        noofskeletons > 0 &&
        messages.map((message) => {
          return <Message key={message._id} message={message} />;
        })}
      {!loading && noofskeletons === 0 && (
        <div className="flex items-center justify-center h-full text-center text-gray-500">
          <p className="italic">
            "No messages yet. Start the conversation and break the silence!"
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
