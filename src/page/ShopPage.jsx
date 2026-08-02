import React from 'react'
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from "../components/ProductCardSkeleton"
import { useProductApi } from '../hooks/productHooks';

const ShopPage = () => {

    const {isPending, data, error} = useProductApi();
    if(error) return <h1>{error.message}</h1>

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {isPending
                ? Array.from({ length: 8 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))
                : data.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
        </div>
    )
}

export default ShopPage
