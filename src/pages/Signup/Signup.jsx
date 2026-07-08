import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="signup-page">

      <div className="signup-card">

        <h1 className="logo">MindBloom</h1>

        <p className="tagline">
          Start your wellness journey today.
        </p>

        <h2>Create Account 🌱</h2>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            required
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="bottom-text">
          Already have an account?
          <Link to="/"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;