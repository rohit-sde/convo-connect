import { FaRegUserCircle } from "react-icons/fa";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full pt-2">
          {/* <img alt="Tailwind CSS chat bubble component" src={}/> */}
          <FaRegUserCircle />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi! What is upp?
      </div>
      <div className={`chat-footer opacity text-xs flex gap-1 items-center`}>
        09:58
      </div>
    </div>
  );
};

export default Message;
