import { Link } from "react-router-dom";

export function Header(){
return(

<header className="bg-white w-full h-[100px] relative flex justify-center items-center ">

<img src="/cbclogo.jpg" className="cursor-pointer h-full rounded-full absolute left-[10px]"/>

<Link to="/" className="text-[#e0a233] text-xl font-bold hover:border-b border-b-accent">Home</Link>

<Link to="/products" className="text-[#e0a233] text-xl font-bold hover:border-b border-b-accent">Products</Link>

<Link to="/About" className="text-[#e0a233] text-xl font-bold hover:border-b border-b-accent">About Us</Link>

<Link to="/Contact" className="text-[#e0a233] text-xl font-bold hover:border-b border-b-accent">Contact Us</Link>

</header>


)


}