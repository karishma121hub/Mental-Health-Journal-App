import "./Therapists.css";
import Sidebar from "../../components/Sidebar/Sidebar";

function Therapists() {
  return (
    <div className="home">

      <Sidebar />

      <div className="main-content">

        

        <div className="therapist-header">
          <h1>👩‍⚕️ Find a Therapist</h1>
          <p>
            Connect with licensed professionals and take the first step toward
            better mental health.
          </p>
        </div>

        {/* Search */}

        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search therapist by name or specialization..."
          />
        </div>

        {/* Featured */}

        <div className="featured-row">

          <div className="featured-card">

            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt=""
            />

            <h3>Dr. Priya Sharma</h3>

            <p>Anxiety & Depression</p>

            <button>View Profile</button>

          </div>

          <div className="featured-card">

            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt=""
            />

            <h3>Dr. Rahul Verma</h3>

            <p>Stress Management</p>

            <button>View Profile</button>

          </div>

        </div>

        {/* List */}

        <div className="list-card">

          <h2>Available Therapists</h2>

          <div className="therapist-item">

            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt=""
            />

            <div>

              <h3>Dr. Anjali Mehta</h3>

              <p>Health Management</p>
              <p>10+ years Experience</p>

            </div>

            <span>⭐ 4.9</span>

            <button>Book</button>

          </div>

          <div className="therapist-item">

            <img
              src="https://randomuser.me/api/portraits/men/20.jpg"
              alt=""
            />

            <div>

              <h3>Dr. Vikram Singh</h3>

              <p>Relationship Therapist</p>
              <p>7 years Experience</p>


            </div>

            <span>⭐ 4.8</span>

            <button>Book</button>

          </div>

          <div className="therapist-item">

            <img
              src="https://randomuser.me/api/portraits/women/55.jpg"
              alt=""
            />

            <div>

              <h3>Dr. Nikita Chetri </h3>

              <p>Child Psychologist</p>
              <p>20 years Experience</p>


            </div>

            <span>⭐ 5.0</span>

            <button>Book</button>

          </div>

        </div>

        {/* Help */}

        <div className="help-card">

          <h2>💚 Need Immediate Support?</h2>

          <p>
            If you're feeling overwhelmed, don't hesitate to reach out to a
            trusted person or a mental health helpline.
          </p>

          <div className="help-buttons">
            <button>📞 Emergency Helpline</button>
            <button>📍 Find Nearby Clinics</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Therapists;