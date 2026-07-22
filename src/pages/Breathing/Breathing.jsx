import "./Breathing.css";
import Sidebar from "../../components/Sidebar/Sidebar";

function Breathing() {
  return (
    <div className="breathing">
      <Sidebar />

      <div className="main-content">

        <div className="breathing-page">

          <div className="breathing-header">
            <h1>🌬️ Breathing Exercises</h1>
            <p>
              Slow down, breathe deeply, and calm your mind.
            </p>
          </div>

          <div className="exercise-grid">

            <div className="exercise-card">
              <h2>🫁 Box Breathing</h2>

              <div className="circle">
                Breathe
              </div>

              <p>
                Inhale for 4 seconds<br/>
                Hold for 4 seconds<br/>
                Exhale for 4 seconds<br/>
                Hold for 4 seconds
              </p>

              <button>Start Exercise</button>
            </div>

            <div className="exercise-card">
              <h2>🌿 4-7-8 Breathing</h2>

              <div className="circle green">
                Relax
              </div>

              <p>
                Inhale 4 sec<br/>
                Hold 7 sec<br/>
                Exhale 8 sec
              </p>

              <button>Start Exercise</button>
            </div>

          </div>

          <div className="tips-card">
            <h2>💚 Benefits of Deep Breathing</h2>

            <ul>
              <li>✔ Reduces stress and anxiety</li>
              <li>✔ Improves concentration</li>
              <li>✔ Slows heart rate</li>
              <li>✔ Helps you sleep better</li>
              <li>✔ Makes you feel relaxed</li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Breathing;