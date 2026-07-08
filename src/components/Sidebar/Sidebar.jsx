import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaBook,
  FaSmile,
  FaUserMd,
  FaLeaf,
  FaChartLine,
  FaWind,
  FaCog,
} from "react-icons/fa";


function Sidebar() {

  return (
    <div className="sidebar">

      <div className="logo">
        <h2>MindBloom</h2>
        <p>Your Mental Wellness Companion</p>
      </div>


      <ul className="menu">

        <NavLink to="/home" className="menu-link">
          <li>
            <FaHome /> Home
          </li>
        </NavLink>


        <NavLink to="/journal" className="menu-link">
          <li>
            <FaBook /> Journal
          </li>
        </NavLink>


        <li>
          <FaSmile /> Mood Tracker
        </li>

        <li>
          <FaUserMd /> Therapists
        </li>

        <li>
          <FaLeaf /> Wellness Hub
        </li>

        <li>
          <FaChartLine /> Insights
        </li>

        <li>
          <FaWind /> Breathing
        </li>

        <li>
          <FaCog /> Settings
        </li>


      </ul>


      <div className="bottom-card">

        <h3>🧘 Take a Deep Breath</h3>

        <p>
          You are doing great! <br />
          <strong>"Be kind to yourself today."</strong>
        </p>

        <small>
          "You are stronger than your thoughts."
        </small>

      </div>


    </div>
  );
}

export default Sidebar;