import React from "react";
import { NavLink } from "react-router";
import { ShoppingCart, LogOut, Zap } from "lucide-react";
import  {useAuth}  from "../hooks/authHooks";

const Navbar = () => {
    const {navigate} = useAuth();
    return (
        <header className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-lg border-b border-white/10">
            <nav className="max-w-7xl mx-auto h-18 px-6 flex items-center justify-between">

                {/* Logo */}
                <div  onClick={()=>navigate("/main")}
                    className="flex items-center gap-3 cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-[#C8F400] flex items-center justify-center">
                        <Zap className="w-5 h-5 text-black fill-black" />
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight">
                        <span className="text-white">Sky</span>
                        <span className="text-[#C8F400]">Mart</span>
                    </h1>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-8 text-sm font-medium">
                    <NavLink
                        to="/main"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#C8F400]"
                                : "text-white/70 hover:text-white transition"
                        } end
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/main/shop"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#C8F400]"
                                : "text-white/70 hover:text-white transition"
                        }
                    >
                        Shop
                    </NavLink>

                    <NavLink
                        to="/main/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#C8F400]"
                                : "text-white/70 hover:text-white transition"
                        }
                    >
                        About
                    </NavLink>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3">

                    {/* Profile */}
                    <div className="flex items-center gap-2 bg-[#1A1A1A] rounded-xl px-4 py-2">
                        <div className="w-8 h-8 rounded-lg bg-[#C8F400] flex items-center justify-center text-black font-bold">
                            P
                        </div>

                        <span className="text-white font-medium">
                            Pushpendra
                        </span>
                    </div>

                    {/* Cart */}
                    <button className="cursor-pointer w-10 h-10 rounded-xl bg-[#1A1A1A] hover:bg-[#C8F400]/20 transition flex items-center justify-center">
                        <ShoppingCart className="w-5 h-5 text-white" />
                    </button>

                    {/* Logout */}
                    <button className="cursor-pointer w-10 h-10 rounded-xl bg-[#1A1A1A] hover:bg-red-500/20 transition flex items-center justify-center">
                        <LogOut className="w-5 h-5 text-white" />
                    </button>

                </div>

            </nav>
        </header>
    );
};

export default Navbar;