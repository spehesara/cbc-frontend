import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductNotFound from "./productNotFound";
import ImageSlider from "../../components/imageSlider";

export default function ProductOverview() {
    const { id: productId } = useParams();
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading"); // "loading", "found", or "not-found"

    // Fetch product details based on the productId from the URL
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productId}`);
                if (res.data) {
                    setProduct(res.data);
                    setStatus("found");
                    console.log(res.data);
                } else {
                    setStatus("not-found");
                }
            } catch (error) {
                console.error("Error fetching product:", error);
                setStatus("not-found");
            }
        };

        fetchProduct();
    }, [productId]);

    return (
        <div className="w-full h-[calc(100vh-100px)]">
            {status === "loading" && (
                <div className="p-[220px] w-full h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-2 border-gray-500 border-b-accent border-b-4" />
                </div>
            )}

            {status === "not-found" && (
                <ProductNotFound />
            )}


            {status === "found" && (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-[35%] h-full">

                        <ImageSlider images={product.images}/>



                    </div>

<div className="w-[65%] h-full p-4"> 
    <h1 className="text-3xl font-bold text-gray-800">{product.productName}</h1>
    <h1 className="text-3xl font-bold text-gray-500">{product.altName.join(" | ")}</h1>

    <p className="text-xl text-gray-600">{(product.price>product.lastPrice)&&
    <span className="line-through text-red-500">LKR.{product.price}</span>
        
        
        
        
        }<span>{" LKR"+ product.lastPrice}</span></p>
     <p className="text-xl text-gray-600 line-clamp-3">{product.description}</p>
    
    
    
    </div> 


                </div>
            )}
        </div>
    );
}