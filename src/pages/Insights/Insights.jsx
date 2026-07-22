import Sidebar from "../../components/Sidebar/Sidebar";
import "./Insights.css";

function Insights() {
  return (
    <div className="insights">
      <Sidebar />

      <div className="main-content">

        <div className="insights-page">

          <div className="insights-header">
            <h1>📈 Insights</h1>
            <p>Your emotional journey at a glance.</p>
          </div>

          {/* Top Cards */}

          <div className="summary-cards">

            <div className="summary-card">
              <h3>😊 Average Mood</h3>
              <h2>Happy</h2>
              <p>Most frequent mood this month</p>
            </div>

            <div className="summary-card">
              <h3>🔥 Current Streak</h3>
              <h2>12 Days</h2>
              <p>Keep writing every day!</p>
            </div>

            <div className="summary-card">
              <h3>📖 Total Journals</h3>
              <h2>35</h2>
              <p>Journal entries written</p>
            </div>

          </div>

          {/* Charts */}

          <div className="chart-section">

            <div className="chart-card">
              <h3>Mood Trend</h3>

              <div className="fake-chart">
                <div className="line"></div>
              </div>

            </div>

            <div className="chart-card">
              <h3>Mood Distribution</h3>

              <div className="mood-bars">

                <div className="bar">
                  <span>😊 Happy</span>
                  <div className="progress happy"></div>
                </div>

                <div className="bar">
                  <span>😌 Calm</span>
                  <div className="progress calm"></div>
                </div>

                <div className="bar">
                  <span>😐 Neutral</span>
                  <div className="progress neutral"></div>
                </div>

                <div className="bar">
                  <span>😔 Sad</span>
                  <div className="progress sad"></div>
                </div>

              </div>

            </div>

          </div>

          {/* Recent Journals */}

          <div className="recent-journals">

            <h2>📝 Recent Journal Entries</h2>

            <div className="journal-item">
              <h4>A Productive Day</h4>
              <p>I completed my college project and felt really proud...</p>
            </div>

            <div className="journal-item">
              <h4>Feeling Better</h4>
              <p>Today I spent time with friends and felt much happier...</p>
            </div>

            <div className="journal-item">
              <h4>Learning React</h4>
              <p>I finally understood React Router today...</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Insights;