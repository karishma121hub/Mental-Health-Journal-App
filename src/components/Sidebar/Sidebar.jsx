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

        <NavLink to="/moodtracker" className="menu-link">
          <li>
          <FaSmile /> Mood Tracker
          </li>
        </NavLink>

        
        <NavLink to="/therapists" className="menu-link">
          <li>
            <FaUserMd /> Therapists
          </li>
          
        </NavLink>


        <NavLink to="/wellnesshub" className="menu-link">
          <li>
            <FaLeaf /> WellnessHub
          </li>
        </NavLink>

        <NavLink to="/insights" className="menu-link">
        <li>
          <FaChartLine /> Insights
        </li>
        </NavLink>
       
       <NavLink to="/breathing" className="menu-link">
        <li>
          <FaWind /> Breathing
        </li>
       </NavLink>


       <NavLink to="/setting" className="menu-link">
        <li>
          <FaCog /> Settings
        </li>
        </NavLink>


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