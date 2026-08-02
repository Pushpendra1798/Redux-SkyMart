import React from 'react'
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from "../components/ProductCardSkeleton"
import { useEffect } from 'react';
import  getProductsDataApi  from "../api/productsApi"


const ShopPage = () => {
    const [productsData, setProductsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const skeletons = Array.from({ length: 8 });
    
    const getData  = async ()=> {
        let data = await getProductsDataApi();
        setProductsData(data);
        setIsLoading(false);
    }

    useEffect(()=> {
        getData();
    },[])
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {isLoading
                ? skeletons.map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))
                : productsData.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

        </div>
    )
}

export default ShopPage
