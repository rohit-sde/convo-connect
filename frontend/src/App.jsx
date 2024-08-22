import "./App.css";
import Home from "./pages/home/home.jsx";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Home />
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
