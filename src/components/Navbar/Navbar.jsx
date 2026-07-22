import "./Navbar.css";
import { FaBell } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">

      <div></div>

      <div className="notification">
        <FaBell />
        <span className="dot"></span>
      </div>

    </div>
  );
}

export default Navbar;