import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaCheckCircle,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function Signup() {
    const navigate = useNavigate();
    const { registerUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
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

        const success = registerUser(formData);

        if (!success) {
            alert("Email is already registered");
            return;
        }

        alert("Account created successfully");
        navigate("/login");
    };

    return (
        <div className="h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-black px-4 py-4">
            <div className="absolute top-16 left-16 w-40 h-32 bg-blue-400/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-16 right-16 w-40 h-32 bg-purple-400/30 rounded-full blur-3xl"></div>

            <div className="w-full max-w-4xl max-h-[calc(100vh-2rem)] grid md:grid-cols-2 bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/40 dark:border-gray-700">

                <div className="hidden md:flex flex-col justify-between p-5 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
                    <div>
                        <h1 className="text-3xl font-bold leading-tight mt-7">
                            Create Your Notes Account 
                        </h1>

                        <p className="mt-3 text-sm text-blue-100 leading-relaxed">
                            Save your ideas, manage your notes, and organize everything in one clean dashboard.
                        </p>
                    </div>

                    <div className="space-y-3 my-5 text-sm">
                        <div className="flex items-center gap-3 bg-white/15 p-3 rounded-xl backdrop-blur-md">
                            <FaCheckCircle />
                            <span>Create and manage notes easily</span>
                        </div>

                        <div className="flex items-center gap-3 bg-white/15 p-3 rounded-xl backdrop-blur-md">
                            <FaCheckCircle />
                            <span>Organize notes by category</span>
                        </div>

                        <div className="flex items-center gap-3 bg-white/15 p-3 rounded-xl backdrop-blur-md">
                            <FaCheckCircle />
                            <span>Access your personal dashboard</span>
                        </div>
                    </div>

                    <div className="bg-white/15 rounded-xl p-4 backdrop-blur-md">
                        <p className="text-sm text-blue-100">Smart Notes App</p>
                        <h3 className="text-lg font-semibold mt-1">
                            Your productivity starts here.
                        </h3>
                    </div>
                </div>

                <div className="p-5 md:p-6">
                    <div className="mb-5">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl shadow-lg">
                            <FaUser />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">
                            Sign Up
                        </h2>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Enter your information to create your account
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                                Full Name
                            </label>

                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
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
                                    className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                                Password
                            </label>

                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create password"
                                    required
                                    className="w-full pl-12 pr-12 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-5">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
