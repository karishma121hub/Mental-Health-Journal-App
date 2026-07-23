import "./MoodTracker.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MoodTracker() {

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [mood, setMood] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const analyzeMood = () => {

    let emotion = "😊 Happy";
    let score = "95%";
    let suggestion =
      "Keep smiling! Continue doing the things that make you happy.";

    const value = text.toLowerCase();

    if (
      value.includes("sad") ||
      value.includes("exam") ||
      value.includes("fail") ||
      value.includes("cry") ||
      value.includes("stress") ||
      value.includes("bad")
    ) {

      emotion = "😔 Sad";
      score = "92%";
      suggestion =
        "It's okay to feel low after a difficult day. Remember that one exam doesn't define your future. Take a deep breath and try again tomorrow.";

    }

    else if (
      value.includes("angry") ||
      value.includes("fight") ||
      value.includes("hate")
    ) {

      emotion = "😠 Angry";
      score = "90%";
      suggestion =
        "Take a few deep breaths before reacting. Give yourself some time.";

    }

    else if (
      value.includes("anxious") ||
      value.includes("fear") ||
      value.includes("panic")
    ) {

      emotion = "😟 Anxiety";
      score = "91%";
      suggestion =
        "Focus on one small step at a time. Everything doesn't need to be solved today.";

    }

    setResult({
      emotion,
      score,
      suggestion,
    });

  };

  const saveMood = async () => {

    analyzeMood();

    try {

      const response = await axios.post(
        "http://localhost:5000/mood",
        {
          mood: mood,
          reason: text
        }
      );
      setMessage(
          "✅ Mood saved successfully! Please check your AI Emotional Support result below."
      );
     

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="home">

      <Sidebar />

      <div className="main-content">

        <div className="tracker-header">
          <h1>😊 Mood Tracker</h1>
          <p>Track your emotions and understand yourself better.</p>
        </div>

        <div className="tracker-grid">

          <div className="mood-card">

            <h2>How are you feeling today?</h2>

            <div className="emoji-row">

              <button onClick={() => setMood("😁 Great")}>
                😁
                <span>Great</span>
              </button>

              <button onClick={() => setMood("😊 Good")}>
                😊
                <span>Good</span>
              </button>

              <button onClick={() => setMood("😌 Calm")}>
                😌
                <span>Calm</span>
              </button>

              <button onClick={() => setMood("😐 Okay")}>
                😐
                <span>Okay</span>
              </button>

              <button onClick={() => setMood("😔 Sad")}>
                😔
                <span>Sad</span>
              </button>

              <button onClick={() => setMood("😭 Awful")}>
                😭
                <span>Awful</span>
              </button>

            </div>

            <br />

            <h4>Selected Mood : {mood}</h4>

            <br />

            <label>Why do you feel this way?</label>

            <textarea
              rows="6"
              placeholder="Write a few thoughts..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>

            <button
              className="save-mood"
              onClick={saveMood}
            >
              Save Today's Mood
            </button>

          </div>

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
                Every emotion is valid. Observe your feelings without judging them.
              </p>

            </div>

          </div>

        </div>
        {message && (
           <div className="success-message">
             {message}
            </div>
        )}
     {result && (

          <div className="tip-card" style={{ marginTop: "25px" }}>

            <h2>🤖 AI Emotional Support</h2>

            <br />

            <h3>Detected Emotion</h3>

            <p>{result.emotion}</p>

            <br />

            <h3>Emotion Analysis Score</h3>

            <p>{result.score}</p>

            <br />

            <h3>Suggestion</h3>

            <p>{result.suggestion}</p>

            <br />

            <h3>🌿 Recommended Next Step</h3>

            <br />

            <button
              className="save-mood"
              onClick={() => navigate("/breathing")}
            >
              Go to Breathing Exercise
            </button>

            <br /><br />

            <button
              className="save-mood"
              onClick={() => navigate("/wellnesshub")}
            >
              Listen to Relaxing Music
            </button>

            <br /><br />

            <button
              className="save-mood"
              onClick={() => navigate("/journal")}
            >
              Write Journal
            </button>

          </div>

        )}

      </div>

    </div>

  );

}

export default MoodTracker;