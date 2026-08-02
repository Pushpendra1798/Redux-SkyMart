import React from "react";
import { ShoppingCart, Minus, Plus } from "lucide-react";

const ProductCard = ({ product }) => {
    return (
        <div className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition-all duration-300 hover:-translate-y-2 hover:border-[#C8F400]/40">

            {/* Image */}
            <div className="relative flex h-52 items-center justify-center bg-white">

                <span className="absolute top-3 left-4 rounded-full bg-black/60 px-3 py-1 text-xs capitalize text-white">
                    {product.category}
                </span>

                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-32 object-contain transition duration-300 group-hover:scale-110"
                />

            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-4">

                <p className="text-xs capitalize text-white/40">
                    {product.category}
                </p>

                <h5 className="mt-2 h-7 line-clamp-2 text-sm font-semibold text-white">
                    {product.title}
                </h5>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-2">

                    <span className="text-yellow-400">★</span>

                    <span className="text-sm text-white">
                        {product.rating?.toFixed(1) || "0.0"}
                    </span>

                    <span className="text-sm text-white/40">
                        ({product.reviews?.length || 0} Reviews)
                    </span>

                </div>

                {/* Price & Actions */}
                <div className="mt-3 border-t border-white/10 pt-3 flex justify-between">

                    {/* Price */}
                    <h1 className="text-xl font-bold text-[#C8F400]">
                        ${product.price}
                    </h1>

                    <div className="flex items-center gap-3">

                        {/* Quantity */}
                        
                        <div className="flex items-center rounded-xl border border-[#C8F400] overflow-hidden">

                            <button className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] text-white hover:bg-[#C8F400] hover:text-black transition">
                                <Minus size={14} />
                            </button>

                            <span className="w-10 h-8 flex items-center justify-center text-sm font-semibold text-white bg-[#111]">
                                1
                            </span>

                            <button className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] text-white hover:bg-[#C8F400] hover:text-black transition">
                                <Plus size={14} />
                            </button>

                        </div>
                        {/* Add Button */}
                        <button className="flex items-center gap-2 rounded-xl bg-[#C8F400] px-4 py-2 text-xs font-semibold text-black transition-all duration-300 hover:scale-105 active:scale-95">
                            <ShoppingCart size={14} />
                            Add
                        </button>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default ProductCard;