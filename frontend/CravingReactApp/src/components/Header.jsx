import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg px-4"
      style={{ backgroundColor: "#c94c06" }}
    >
      <div className="container-fluid">

        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Craving Logo"
            className="logo"
          />
        </Link>

        <div className="ms-auto d-flex align-items-center gap-3">
          <Link
            to="/login"
            className="text-white text-decoration-none fw-semibold"
          >
            Login
          </Link>

          <Link to="/register">
            <button className="btn btn-light text-danger btn-sm">
              Register
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Header;