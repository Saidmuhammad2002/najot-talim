import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./features/auth/Login";
import { Routes, Route, Router } from "react-router-dom";
import SignUp from "./features/auth/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
