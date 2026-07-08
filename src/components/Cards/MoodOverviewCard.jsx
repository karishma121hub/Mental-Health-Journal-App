import "./Cards.css";

function MoodOverviewCard() {
  return (
    <div className="card mood-overview">
      <div className="card-header">
        <h3>Mood Overview</h3>
        <span>This Week</span>
      </div>

      <div className="graph">
        <div className="line"></div>
      </div>
    </div>
  );
}

export default MoodOverviewCard;