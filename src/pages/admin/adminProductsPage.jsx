import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPencil, FaPlus, FaTrash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false)

  useEffect(() => {

if(!productsLoaded){

 axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products").then((res) => {
      setProducts(res.data);
      console.log(res.data)
      setProductsLoaded(true)
    });

}

   
  }, [productsLoaded]);

const navigate = useNavigate();


  return (
    <div className="p-8 bg-gray-100 min-h-screen relative">
      <Link to={"/admin/products/addProduct"} className="absolute right-[25px] bottom-[25px] text-[25px] bg-[#1d4ed7] text-white p-4 rounded-xl hover:bg-blue-400"><FaPlus/></Link>  

      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Products Page</h1>


{

productsLoaded? <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="px-6 py-3">Product ID</th>
              <th className="px-6 py-3">Product Name</th>
              <th className="px-6 py-3">Price ($)</th>
              <th className="px-6 py-3">Last Price ($)</th>
              <th className="px-6 py-3">Stock</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product, index) => (
              <tr key={product.productId} className="hover:bg-gray-50">
                <td className="px-6 py-4">{product.productId}</td>
                <td className="px-6 py-4">{product.productName}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4  text-red-500">${product.lastPrice}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4 truncate max-w-xs">{product.description}</td>
                <td className="px-6 py-4 flex space-x-3 text-blue-600">

<button className="cursor-pointer hover:text-red-600"

title="Delete"

onClick={()=>{


const token = localStorage.getItem("token");

axios.delete(import.meta.env.VITE_BACKEND_URL+`/api/products/${product.productId}`, {
headers :{
Authorization : `Bearer ${token}`,

},
  


}).then((res)=>{

console.log(res.data)
toast.success("Product Deleted Successfully")
setProductsLoaded(false)

}).catch((err)=>{

console.log(err)
toast.error("Failed to delete Product!")

})

}}





>

<FaTrash  />


</button>

<button className="cursor-pointer hover:text-blue-800"

title="edit"

onClick={()=>{
                                       //State ekaka daala product details tika editProduct page ekata aran yanawa//
navigate("/admin/products/editProduct", {state: {product:product}});
  
}}



>
 <FaPencil  />



</button>

                 
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>:

      <div className="w-full h-full flex justify-center items-center">

<div className="w-[60px] h-[60px] border-[4px] border-gray-200 border-b-blue-700 animate-spin rounded-full">


</div>


</div>


}








     


    </div>
  );
}
