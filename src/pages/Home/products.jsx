import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../../components/ProductCard";

export default function ProductPage() {

    const [products, setProducts] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState("loading"); // methanata enna puluwan status 3 - loading, loaded, error//

    useEffect(

        () => {

            if (loadingStatus == "loading") {

                axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products")

                    .then((res) => {
                        console.log(res.data);
                        setProducts(res.data);
                        setLoadingStatus("loaded");

                    }).catch(
   (err) => toast.error("Failed to fetch products!")

                    )

                       
                    
            }




        },[])

        return(


<div className="w-full h-full  overflow-y-scrollscroll flex flex-wrap ">

{
products.map(
(products)=>

 <ProductCard  product={products} />


)


}

</div>

        )

}