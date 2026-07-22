import "./Settings.css";
import Sidebar from "../../components/Sidebar/Sidebar";

function Settings() {
  return (
    <div className="settings">
      <Sidebar />

      <div className="main-content">
    

        <div className="settings-page">

          <div className="settings-header">
            <h1>⚙️ Settings</h1>
            <p>Manage your account and personalize your experience.</p>
          </div>

          <div className="profile-card">

            <div className="profile-left">
              <div className="avatar">👩</div>

              <div>
                <h2>Karishma Patel</h2>
                <p>karishma@gmail.com</p>
              </div>
            </div>

            <button>Edit Profile</button>

          </div>

          <div className="settings-list">

            <div className="setting-item">
              <span>🌙 Dark Mode</span>
              <input type="checkbox" />
            </div>

            <div className="setting-item">
              <span>🔔 Notifications</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="setting-item">
              <span>🔒 Private Journal</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="setting-item">
              <span>🌐 Language</span>

              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>

          </div>

          <div className="about-card">

            <h2>💚 About MindBloom</h2>

            <p>
              MindBloom is your personal mental wellness companion.
              Track your mood, write journals, practice breathing
              exercises, discover wellness resources and stay positive
              every day.
            </p>

          </div>

          <button className="logout-btn">
            Logout
          </button>

        </div>
      </div>
    </div>
  );
}

export default Settings;