import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
//-------------------------------------------------------- Starter code for SignUp Component

// export default Sidebar;
// import SearchInput from "./SearchInput.jsx";
// import Conversations from "./Conversations.jsx";

// const Sidebar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//       <SearchInput />
//       <div className="divider px-3"></div>
//       <Conversations />
//       {/* <LogoutButton /> */}
//     </div>
//   );
// };

// export default Sidebar;
