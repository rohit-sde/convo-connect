/* eslint-disable react/prop-types */
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user Avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;

//-------------------------------------------------------- Starter code for SignUp Component

// import { FaRegUserCircle } from "react-icons/fa";

// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <FaRegUserCircle className="mt-3 ml-3" />
//           </div>
//         </div>
//         <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between">
//             <p className="font-bold text-gray-200">Jhon Doe</p>
//             <span className="text-xl">😎</span>
//           </div>
//         </div>
//       </div>
//       <div className="divider my-0 py-0 h-1" />
//     </>
//   );
// };

// export default Conversation;
