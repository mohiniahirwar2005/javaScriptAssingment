import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen relative">

      

      {/* Background Image */}
      <div
        className="h-[calc(100vh-64px)] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')",
        }}
      >
        {/* Login Card */}
        <div className="bg-white w[420px] p-8 rounded-lg shadow-lg ml-24">

          <h1 className="text-4xl font-bold text-orange-700 text-center">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Login to your Cravings account
          </p>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm text-gray-600">
                Remember me
              </span>
            </div>

            <Link
              to="/forgot-password"
              className="text-sm text-orange-700"
            >
              Forgot Password?
            </Link>
          </div>

          <button className="w-full bg-orange-700 text-white py-3 rounded font-semibold hover:bg-orange-800">
            Login
          </button>

          <div className="flex items-center my-6">
            <hr className="flex-1" />
            <span className="px-3 text-gray-500 text-sm">
              Don't have an account?
            </span>
            <hr className="flex-1" />
          </div>

          <div className="text-center">
            <Link
              to="/register"
              className="text-orange-700 font-medium"
            >
              Create an account
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;