import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />

    </Routes>
  );
}

export default App;