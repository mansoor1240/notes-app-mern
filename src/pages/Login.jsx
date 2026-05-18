import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = loginUser(formData.email, formData.password);

    if (success) {
      navigate("/dashboard");
    } else {
      alert("Email or password is incorrect");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/40 dark:border-gray-700">

        <div className="hidden md:flex flex-col justify-center p-10 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <h1 className="text-4xl font-bold leading-tight">
            Welcome Back 👋
          </h1>

          <p className="mt-4 text-blue-100">
            Manage your notes, organize your ideas, and continue your work from where you left off.
          </p>

          <div className="mt-10 space-y-4">
            <div className="bg-white/15 p-4 rounded-2xl">
              ✨ Create and manage notes easily
            </div>
            <div className="bg-white/15 p-4 rounded-2xl">
              🌙 Dark mode supported
            </div>
            <div className="bg-white/15 p-4 rounded-2xl">
              🔐 Secure login flow
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Login Account
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Please enter your details to continue
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-12 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>

              <button type="button" className="text-blue-600 font-semibold">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-semibold">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;