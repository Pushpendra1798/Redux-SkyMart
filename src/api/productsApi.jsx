import { axiosInstance } from "../config/axiosInstance";

let getProductsData = async () => {
    try {
        let res = await axiosInstance.get("/products");
        return res.data.products
    } catch (error) {
        console.log("Errors in Producs API", error);
    }
}

export default getProductsData;