import React from 'react'
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from "../components/ProductCardSkeleton"
import { useProductApi } from '../hooks/productHooks';
import Filter from "../components/Filter"
import { useState } from "react";

const ShopPage = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const {isPending, data, error} = useProductApi();
    if(error) return <h1>{error.message}</h1>

const filteredProducts = data?.filter((product) => {
    const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
        category === "" || product.category === category;

    return matchesSearch && matchesCategory;
});




    return (
        <div className='min-h-screen bg-black p-8 flex flex-col gap-10'>
            <Filter
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {isPending
                    ? Array.from({ length: 8 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))
                    : filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ShopPage
