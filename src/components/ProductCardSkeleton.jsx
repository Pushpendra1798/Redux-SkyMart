import React from "react";

const ProductCardSkeleton = () => {
    return (
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111] animate-pulse">

            {/* Image */}
            <div className="relative flex h-52 items-center justify-center bg-white">

                {/* Category Badge */}
                <div className="absolute top-3 left-4 h-6 w-20 rounded-full bg-gray-300" />

                {/* Product Image */}
                <div className="h-32 w-32 rounded-xl bg-gray-300" />

            </div>

            {/* Content */}
            <div className="p-4">

                {/* Category */}
                <div className="h-3 w-20 rounded bg-white/10" />

                {/* Title */}
                <div className="mt-3 h-4 w-full rounded bg-white/10" />
                <div className="mt-2 h-4 w-3/4 rounded bg-white/10" />

                {/* Rating */}
                <div className="mt-4 flex items-center gap-2">

                    <div className="h-4 w-4 rounded bg-yellow-400/50" />

                    <div className="h-3 w-8 rounded bg-white/10" />

                    <div className="h-3 w-20 rounded bg-white/10" />

                </div>

                {/* Bottom */}
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">

                    {/* Price */}
                    <div className="h-6 w-16 rounded bg-[#C8F400]/30" />

                    <div className="flex items-center gap-3">

                        {/* Quantity */}
                        <div className="flex items-center overflow-hidden rounded-xl border border-[#C8F400]/30">

                            <div className="h-8 w-8 bg-white/10" />

                            <div className="h-8 w-10 bg-white/5" />

                            <div className="h-8 w-8 bg-white/10" />

                        </div>

                        {/* Add Button */}
                        <div className="h-8 w-20 rounded-xl bg-[#C8F400]/30" />

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProductCardSkeleton;