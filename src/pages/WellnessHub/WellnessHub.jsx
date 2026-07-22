import "./WellnessHub.css";
import Sidebar from "../../components/Sidebar/Sidebar";

function WellnessHub() {
  return (
    <div className="home">

      <Sidebar />

      <div className="main-content">

        <div className="wellness-header">

          <h1>🌿 Wellness Hub</h1>

          <p>
            Explore resources that help you relax, smile and feel better every
            day.
          </p>

        </div>

        {/* Daily Tip */}

        <div className="tip-card">

          <h2>💚 Daily Wellness Tip</h2>

          <p>
            Spend at least 10 minutes outdoors today. Fresh air can reduce
            stress and improve your mood.
          </p>

        </div>

        {/* Resources */}

        <div className="resource-grid">

          <div className="resource-card">
            <div className="emoji">🎵</div>

            <h3>Relaxing Music</h3>

            <p>
              Peaceful music to reduce anxiety and help you concentrate.
            </p>

            <button>Listen</button>

          </div>

          <div className="resource-card">
            <div className="emoji">😂</div>

            <h3>Comedy Videos</h3>

            <p>
              Funny videos that can instantly brighten your mood.
            </p>

            <button>Watch</button>

          </div>

          <div className="resource-card">
            <div className="emoji">🎬</div>

            <h3>Feel-Good Movies</h3>

            <p>
              Movies that inspire positivity and happiness.
            </p>

            <button>Explore</button>

          </div>

          <div className="resource-card">
            <div className="emoji">📚</div>

            <h3>Self-Care Articles</h3>

            <p>
              Learn healthy habits, stress management and mindfulness.
            </p>

            <button>Read</button>

          </div>

          <div className="resource-card">
            <div className="emoji">🧘</div>

            <h3>Meditation</h3>

            <p>
              Guided breathing and meditation exercises.
            </p>

            <button>Start</button>

          </div>

          <div className="resource-card">
            <div className="emoji">😴</div>

            <h3>Sleep Sounds</h3>

            <p>
              Nature sounds and relaxing rain for better sleep.
            </p>

            <button>Play</button>

          </div>

        </div>

        {/* Challenge */}

        <div className="challenge-card">

          <h2>🌸 Today's Wellness Challenge</h2>

          <ul>

            <li>💧 Drink 8 glasses of water</li>

            <li>📖 Write one journal entry</li>

            <li>🚶 Walk for 15 minutes</li>

            <li>😊 Smile at someone today</li>

          </ul>

        </div>

        {/* Quote */}

        <div className="affirmation-card">

          <h2>✨ Positive Affirmation</h2>

          <p>
            "Your mind is a garden. Nurture it with kindness, patience and hope."
          </p>

        </div>

      </div>

    </div>
  );
}

export default WellnessHub;