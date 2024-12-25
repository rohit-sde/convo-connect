// import React from "react";
import Conversation from "./Mconversation.jsx";
import useGetConversations from "../../hooks/useGetConversations.js";
import getRandomEmoji from "../utils/emojis.js";
import SidebarSkeleton from "../skeleton/SidebarSkeleton.jsx";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading &&
        [...Array(6)].map(() => {
          <SidebarSkeleton />;
        })}
      {conversations?.map?.((conversation, idx) => {
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
            emoji={getRandomEmoji()}
          />
        );
      })}
    </div>
  );
};
export default Conversations;

//-------------------------------------------------------- Starter code for SignUp Component

// // import React from "react";
// import Conversation from "./Mconversation.jsx";

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   );
// };

// export default Conversations;
