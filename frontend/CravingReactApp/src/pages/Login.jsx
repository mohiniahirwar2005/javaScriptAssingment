import { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/login.jpeg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
  };

  return (
    <div
      className="auth-bg login-page"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="auth-card">

        <h1>Welcome Back</h1>

        <p>Login to your Cravings account</p>

        <form onSubmit={handleSubmit}>

          <label>Email</label>

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="mt-3">Password</label>

          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-between mt-3">
            <div>
              <input type="checkbox" /> Remember me
            </div>

            <a href="#">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="btn login-btn mt-4"
          >
            Login
          </button>

        </form>

        <hr />

        <p className="text-center">
          Don't have an account?
        </p>

        <Link
          to="/register"
          className="register-link"
        >
          Create an account
        </Link>

      </div>
    </div>
  );
}

export default Login;
