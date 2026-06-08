import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero-section">
      <div className="overlay">
        <div className="hero-content">
          <h1>
            Your Favorite Food,
            <br />
            Delivered Fast
          </h1>

          <p>
            Order from thousands of restaurants and get it delivered to your
            doorstep
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <div className="d-flex justify-content-center gap-3 mt-4">
              <Link to="/register">
                <button className="signup-btn">Sign Up</button>
              </Link>

              <Link to="/login">
                <button className="order-btn">Order Now</button>
              </Link>
            </div>
          </div>

          <div className="search-box mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search restaurants or dishes..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
