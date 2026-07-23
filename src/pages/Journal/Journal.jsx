import "./Journal.css";
import Sidebar from "../../components/Sidebar/Sidebar";

function Journal() {
  return (
    <div className="journal"><Sidebar />
      <div className="main-content">
        <div className="journal-page">

          <div className="journal-header">
            <h1>📖 My Journal</h1>
            <p>Your thoughts are safe here. Write freely and reflect with kindness.</p>
          </div>

          <div className="journal-container">

            {/* Left Side */}
            <div className="journal-form">

              <div className="prompt-card">
                <h3>💡 Today's Prompt</h3>
                <p>What made you smile today?</p>
              </div>

              <label>How are you feeling today?</label>

              <div className="mood-buttons">
                <button>😀</button>
                <button>😊</button>
                <button>😌</button>
                <button>😐</button>
                <button>😔</button>
                <button>😭</button>
              </div>

              <label>Journal Title</label>

              <input
                type="text"
                placeholder="Give today's journal a title..."
              />

              <label>Today's Thoughts</label>

              <textarea
                rows="8"
                placeholder="Write whatever is on your mind..."
              ></textarea>

              <label>🌸 Three Things I'm Grateful For</label>

              <input type="text" placeholder="1." />
              <input type="text" placeholder="2." />
              <input type="text" placeholder="3." />

              <label>🌱 What did you learn today?</label>

              <textarea
                rows="3"
                placeholder="Something you learned..."
              ></textarea>

              <label>🎯 Tomorrow's Goal</label>

              <input
                type="text"
                placeholder="One goal for tomorrow..."
              />

              <button className="save-btn">
                Save Journal
              </button>

            </div>

            {/* Right Side */}
            <div className="journal-side">

              <div className="stats-card">

                <h3>📊 Writing Progress</h3>

                <div className="stat">
                  <span>🔥 Streak</span>
                  <strong>12 Days</strong>
                </div>

                <div className="stat">
                  <span>📖 Journals</span>
                  <strong>35</strong>
                </div>

                <div className="stat">
                  <span>😊 Average Mood</span>
                  <strong>Happy</strong>
                </div>

                <div className="stat">
                  <span>✍ Words Written</span>
                  <strong>12,450</strong>
                </div>

              </div>

              <div className="quote-card">

                <h3>🌿 Daily Reminder</h3>

                <p>
                  Progress is more important than perfection.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Journal;