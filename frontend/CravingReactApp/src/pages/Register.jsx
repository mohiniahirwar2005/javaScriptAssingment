import { Link } from "react-router-dom";
import bgImage from "../assets/register.png";

function Register() {
  return (
    <div
      className="auth-bg register-align"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="auth-card">

        <h1>Create Account</h1>

        <p className="subtitle">
          Join us as a Customer, Restaurant, or Rider
        </p>

        <div className="mb-4">
          <label className="fw-semibold d-block mb-2">
            Register as:
          </label>

          <div className="d-flex gap-3">
            <label>
              <input type="radio" name="role" defaultChecked />
              {" "}Customer
            </label>

            <label>
              <input type="radio" name="role" />
              {" "}Restaurant
            </label>

            <label>
              <input type="radio" name="role" />
              {" "}Rider
            </label>
          </div>
        </div>

        <form>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your full name"
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter your email"
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your phone number"
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter your password"
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Confirm your password"
          />

          <div className="mb-3">
            <input type="checkbox" />
            {" "}
            I agree to the terms and conditions.
          </div>

          <button
            type="submit"
            className="btn login-btn"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-3">
          Already registered?
          <Link to="/login"> Login here</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;