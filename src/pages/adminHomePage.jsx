import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GoGraph } from "react-icons/go";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import AdminProductsPage from "./admin/adminProductsPage";

export default function AdminHomePage() {
  return (
    <div className="bg-blue-200 w-full h-screen flex">

      <div className="bg-blue-700 w-[20%] h-screen flex flex-col items-center gap-6 pt-10 text-white">

        <Link className="flex flex-row items-center gap-2" to="/admin/dashboard">
          <GoGraph /> Dashboard view
        </Link>

        <Link className="flex flex-row items-center gap-2" to="/admin/products">
          <MdProductionQuantityLimits /> Products
        </Link>

        <Link className="flex flex-row items-center gap-2" to="/admin/orders">
          <FaShoppingCart /> Orders
        </Link>

        <Link className="flex flex-row items-center gap-2" to="/admin/customers">
          <FaUsers /> Customers
        </Link>

      </div>

      <div className="bg-red-600 w-[80%] h-screen">
       <Routes paths="/*">
       
       <Route path="/dashboard" element={<h1>Dashboard</h1>}/>
        <Route path="/products" element={<AdminProductsPage/>}/>
        <Route path="/orders" element={<h1>Orders</h1>}/>
       <Route path="/customers" element={<h1>Customers</h1>}/>

       <Route path="/*" element={<h1>404 Not Found</h1>}/>
       
       </Routes>
      </div>

    </div>
  );
}
