import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1 className="logo">MindBloom</h1>

        <p className="tagline">
          Be kind to yourself. Every day is a fresh beginning.
        </p>

        <h2>Welcome Back 👋</h2>

        <form onSubmit={handleLogin}>

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

          <button type="submit">
            Login
          </button>

        </form>

        <p className="bottom-text">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;