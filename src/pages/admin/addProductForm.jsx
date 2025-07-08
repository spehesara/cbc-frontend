import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import uploadMediaToSupabase from "../../utils/mediaUpload";

export default function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [altName, setAltName] = useState("");

  const [imageFiles,setIamgeFiles] = useState([])
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");

async function handleSubmit(){

const altNames = altName.split(",")

const promisesArray = []

//images godak dammoth eewata adaala URLs ganna part eka, eeewa Promises widiyata print karagnne//
for(let i=0; i<imageFiles.length;i++){

  promisesArray[i] = uploadMediaToSupabase(imageFiles[i])

}

//Prmoise.all kiyala daala apita promisesArray ekak ma eka wara run karagnn puluwan//
const imgURLs = await Promise.all(promisesArray)




const product = {

productId:productId,
productName:productName,
altName:altNames,
images:imgURLs,
price:price,
lastPrice:lastPrice,
description:description,
stock:stock

}
const token = localStorage.getItem("token")


try{

await axios.post("http://localhost:5000/api/products",product,{
headers : {

Authorization: "Bearer "+token

}


})

toast.success("Product Added Successfully")



}catch(err){

  toast.error("Failed to add Product!")

}

}


  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">Add New Product</h1>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Product ID</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Alternative Names</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={altName}
              onChange={(e) => setAltName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Image URLs</label>
            <input
              type="file"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          
              onChange={(e) => {

                setIamgeFiles(e.target.files)

              }}
multiple

            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Price ($)</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Last Price ($)</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Stock</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Description</label>
            <textarea
              className="w-full p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
        onClick={handleSubmit}
          
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}


