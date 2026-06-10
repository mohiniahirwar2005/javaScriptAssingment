import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="bg-[#44454f] text-white">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Tagline */}
        <p className="text-center text-sm mb-10">
          --- Your favorite food delivery platform connecting customers with
          restaurants and riders. ---
        </p>

        {/* Main Footer */}
        <div className="grid md:grid-cols-5 gap-8">

          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Cravings Logo"
              className="w-28 h-28 object-contain bg-white rounded-full p-3"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/menu">Order Now</Link>
              </li>
            </ul>
          </div>

          {/* Restaurants */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              For Restaurants
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/partner">
                  Partner With Us
                </Link>
              </li>

              <li>
                <Link to="/restaurant-dashboard">
                  Restaurant Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Riders */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              For Riders
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/become-rider">
                  Become a Rider
                </Link>
              </li>

              <li>
                <Link to="/rider-dashboard">
                  Rider Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              Feedback & Support
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/feedback">
                  Submit Feedback
                </Link>
              </li>

              <li>
                <Link to="/help">
                  Help Center
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-500" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">

          <p>
            © 2026 Cravings. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms of Service
            </Link>

            <Link to="/sitemap">
              Site Map
            </Link>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;