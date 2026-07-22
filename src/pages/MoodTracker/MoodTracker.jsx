import "./MoodTracker.css";
import Sidebar from "../../components/Sidebar/Sidebar";

function MoodTracker() {
  return (
    <div className="home">

      <Sidebar />

      <div className="main-content">
        
        <div className="tracker-header">
          <h1>😊 Mood Tracker</h1>
          <p>Track your emotions and understand yourself better.</p>
        </div>

        <div className="tracker-grid">

          {/* Left Side */}

          <div className="mood-card">

            <h2>How are you feeling today?</h2>

            <div className="emoji-row">

              <button>😁<span>Great</span></button>
              <button>😊<span>Good</span></button>
              <button>😌<span>Calm</span></button>
              <button>😐<span>Okay</span></button>
              <button>😔<span>Sad</span></button>
              <button>😭<span>Awful</span></button>

            </div>

            <label>Why do you feel this way?</label>

            <textarea
              rows="6"
              placeholder="Write a few thoughts..."
            ></textarea>

            <button className="save-mood">
              Save Today's Mood
            </button>

          </div>

          {/* Right Side */}

          <div className="stats-side">

            <div className="summary-card">

              <h3>📊 Mood Summary</h3>

              <div className="summary">
                <span>😊 Most Common Mood</span>
                <strong>Happy</strong>
              </div>

              <div className="summary">
                <span>🔥 Current Streak</span>
                <strong>12 Days</strong>
              </div>

              <div className="summary">
                <span>📅 Total Entries</span>
                <strong>35</strong>
              </div>

            </div>

            <div className="tip-card">

              <h3>🌿 Wellness Tip</h3>

              <p>
                Every emotion is valid. Observe your feelings without judging
                them.
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="bottom-grid">

          <div className="graph-card">

            <div className="card-title">
              <h2>Mood Trend</h2>
              <span>This Week</span>
            </div>

            <div className="graph-placeholder">

              <div className="line"></div>

            </div>

          </div>

          <div className="history-card">

            <h2>Recent Moods</h2>

            <div className="history">

              <div className="history-item">
                😊 <span>Yesterday</span>
                <strong>Happy</strong>
              </div>

              <div className="history-item">
                😌 <span>2 Days Ago</span>
                <strong>Calm</strong>
              </div>

              <div className="history-item">
                😔 <span>3 Days Ago</span>
                <strong>Sad</strong>
              </div>

              <div className="history-item">
                😁 <span>4 Days Ago</span>
                <strong>Great</strong>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MoodTracker;