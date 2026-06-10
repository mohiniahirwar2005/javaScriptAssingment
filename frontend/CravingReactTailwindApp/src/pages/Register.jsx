import Header from "../components/Header";
import { Link } from "react-router-dom";
import food from "../assets/images/food.png";

function Register() {
  return (
    <>
      <div
        className="min-h-[calc(100vh-64px)] bg-cover bg-center flex justify-end items-center"
        style={{
          backgroundImage: `url(${food})`,
        }}
      >
        
        <div className="bg-white w[500px] p-20 rounded-lg shadow-lg mr-24">

          <h1 className="text-4xl font-bold text-[#c84d0e] text-center">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Join Cravings Today
          </p>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-[#c84d0e]"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-[#c84d0e]"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-[#c84d0e]"
            />
          </div>

          <button className="w-full bg-[#c84d0e] text-white py-3 rounded font-semibold hover:bg-orange-800 transition">
            Register
          </button>

          <div className="flex items-center my-6">
            <hr className="flex-1" />
            <span className="px-3 text-gray-500 text-sm">
              Already have an account?
            </span>
            <hr className="flex-1" />
          </div>

          <div className="text-center">
            <Link
              to="/login"
              className="text-[#c84d0e] font-medium hover:underline"
            >
              Login Here
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Register;