import { Link } from "react-router-dom";

function SiteMap() {
  return (
    <div className="max-w-5xl mx-auto py-10">

      <h1 className="text-5xl text-center font-bold mb-10">
        Site Map
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div>
          <h3 className="font-bold mb-3">
            Main
          </h3>

          <Link to="/">Home</Link>
        </div>

        <div>
          <h3 className="font-bold mb-3">
            Support
          </h3>

          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3 className="font-bold mb-3">
            Account
          </h3>

          <Link to="/login">Login</Link>
        </div>

        <div>
          <h3 className="font-bold mb-3">
            Legal
          </h3>

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>
        </div>

      </div>

    </div>
  );
}

export default SiteMap;