import "./Cards.css";

function MoodCard() {
  return (
    <div className="card mood-card">

      <h3>How are you feeling today?</h3>

      <div className="moods">

        <button>😊<span>Great</span></button>

        <button>🙂<span>Good</span></button>

        <button>😐<span>Okay</span></button>

        <button>😔<span>Bad</span></button>

        <button>😭<span>Awful</span></button>

      </div>

      <button className="check-btn">
        Check In
      </button>

    </div>
  );
}

export default MoodCard;