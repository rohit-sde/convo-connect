import { Routes, Route } from "react-router-dom";

import "./App.css";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/login";
import Home from "./pages/home/Home.jsx";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
