import React from "react";
import { useAuth } from "../hooks/authHooks";

const LoginPage = () => {
    const { navigate } = useAuth();
    return (
        <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-[#1A1A1A] border border-gray-800 rounded-2xl shadow-2xl p-6">

                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black text-xl font-bold">
                        S
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mb-5">
                    <h1 className="text-3xl font-bold text-white">
                        Welcome Back
                    </h1>

                    <p className="text-gray-400 mt-1 text-sm">
                        Login to your SkyMart account.
                    </p>
                </div>

                <form className="space-y-3">

                    {/* Email */}
                    <div>
                        <label className="text-gray-300 text-sm">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="john@gmail.com"
                            className="mt-1 w-full bg-[#262626] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-gray-300 text-sm">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="********"
                            className="mt-1 w-full bg-[#262626] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-gray-400">
                            <input
                                type="checkbox"
                                className="accent-amber-500"
                            />
                            Remember me
                        </label>

                        <button
                            type="button"
                            className="text-amber-500 hover:text-amber-400"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 transition duration-300 font-semibold text-black"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-2 my-4">
                    <div className="flex-1 h-px bg-gray-700"></div>
                    <span className="text-gray-500 text-sm">OR</span>
                    <div className="flex-1 h-px bg-gray-700"></div>
                </div>

                {/* Google Login */}
                <button
                    className="w-full py-2.5 rounded-lg border border-gray-700 text-white hover:bg-[#262626] transition duration-300"
                >
                    Continue with Google
                </button>

                {/* Register */}
                <p className="text-center text-sm text-gray-400 mt-4">
                    Don't have an account?{" "}
                    <button
                        onClick={()=>{navigate("/register")}}
                        type="button"
                        className="text-amber-500 hover:text-amber-400 font-medium cursor-pointer"
                    >
                        Create Account
                    </button>
                </p>

            </div>
        </div>
    );
};

export default LoginPage;