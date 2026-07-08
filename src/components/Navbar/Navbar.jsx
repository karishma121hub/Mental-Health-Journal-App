import "./Navbar.css";
import { FaBell } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">

      <div className="welcome-text">
        <h1>Good Morning, Karishma 🌼</h1>
        <p>How are you feeling today?</p>
      </div>

      <div className="notification">
        <FaBell />
        <span className="dot"></span>
      </div>

    </div>
  );
}

export default Navbar;