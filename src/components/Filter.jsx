import React from "react";
import { Search } from "lucide-react";

const Filters = ({
    search,
    setSearch,
    category,
    setCategory,
}) => {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#111] p-5 md:flex-row md:items-center">

            {/* Search */}
            <div className="relative flex-1">

                <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="w-full rounded-xl border border-white/10 bg-[#1A1A1A] py-3 pl-11 pr-4 text-white outline-none transition focus:border-[#C8F400]"
                />

            </div>

            {/* Category */}
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-xl border border-white/10 bg-[#1A1A1A] px-4 py-3 text-white outline-none focus:border-[#C8F400]"
            >
                <option value="">All Categories</option>
                <option value="groceries">Groceries</option>
                <option value="beauty">Beauty</option>
                <option value="furniture">Furniture</option>
            </select>

        </div>
    );
};

export default Filters;