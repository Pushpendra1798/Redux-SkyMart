import { useQuery } from "@tanstack/react-query";
import  getProductsDataApi  from "../api/productsApi"
export const useProductApi = () => {
    let {isPending, data, error} = useQuery({
        queryKey:['products'],
        queryFn: getProductsDataApi,
        staleTime:7000
    });

    return {
        isPending,
        data,
        error
    }
}