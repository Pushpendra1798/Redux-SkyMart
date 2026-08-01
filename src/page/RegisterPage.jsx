import React from "react";
import { useAuth } from "../hooks/authHooks";

const RegisterPage = () => {
    const { navigate, register, errors, handleSubmit, registerForm } = useAuth();
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
                        Create Account
                    </h1>

                    <p className="text-gray-400 mt-1 text-sm">
                        Join SkyMart and start shopping smarter.
                    </p>
                </div>

                    <form 
                    onSubmit={handleSubmit(registerForm)}
                    className="space-y-4">

                        {/* Name & Email */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-gray-300 text-sm">
                                    Full Name
                                </label>

                                <input
                                    {...register("name", {
                                        required:"name is required"
                                    })}
                                    type="text"
                                    placeholder="John Doe"
                                    className="mt-1 w-full bg-[#262626] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                                />
                                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="text-gray-300 text-sm">
                                    Email
                                </label>

                                <input
                                    {...register("email", {
                                        required:"email is required"
                                    })}
                                    type="email"
                                    autoComplete="email"
                                    placeholder="john@gmail.com"
                                    className="mt-1 w-full bg-[#262626] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                                />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>
                        </div>

                        {/* Passwords */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-gray-300 text-sm">
                                    Password
                                </label>

                                <input
                                    {...register("password", {
                                        required:"password is required",
                                        minLength:{
                                            value:8,
                                            message:"Minimum 8 Characters are required"
                                        }
                                    })}
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="********"
                                    className="mt-1 w-full bg-[#262626] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                                />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>

                            <div>
                                <label className="text-gray-300 text-sm">
                                    Confirm Password
                                </label>

                                <input
                                    {...register("password", {
                                        required:"password is required",
                                        minLength:{
                                            value:8,
                                            message:"Minimum 8 Characters are required"
                                        }
                                    })}
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="********"
                                    className="mt-1 w-full bg-[#262626] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                                />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>
                        </div>

                        {/* Terms */}
                        <label className="flex items-center gap-2 text-sm text-gray-400">
                            <input
                                type="checkbox"
                                className="accent-amber-500"
                                required
                            />
                            I agree to the Terms & Conditions
                        </label>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 transition font-semibold text-black"
                        >
                            Create Account
                        </button>

                    </form>

                {/* Divider */}
                <div className="flex items-center gap-2 my-4">
                    <div className="flex-1 h-px bg-gray-700"></div>

                    <span className="text-gray-500 text-sm">
                        OR
                    </span>

                    <div className="flex-1 h-px bg-gray-700"></div>
                </div>

                {/* Google */}
                <button className="w-full py-2.5 rounded-lg border border-gray-700 text-white hover:bg-[#262626] transition">
                    Continue with Google
                </button>

                {/* Login */}
                <p className="text-center text-sm text-gray-400 mt-4">
                    Already have an account?{" "}
                    <button
                        onClick={()=>navigate("/")}
                        type="button"
                        className="text-amber-500 hover:text-amber-400 font-medium cursor-pointer"
                    >
                        Login
                    </button>
                </p>

            </div>
        </div>
    );
};

export default RegisterPage;