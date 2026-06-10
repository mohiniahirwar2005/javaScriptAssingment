import { Link } from "react-router-dom";
import logo from "../assets/images/image.png";

function Header() {
  return (
    <header className="bg-[#c84d0e] py-3 px-10">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Cravings Logo"
            className="h-10 object-contain"
          />
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-white font-medium"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-white text-[#c84d0e] px-4 py-2 rounded"
          >
            Register
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Header;