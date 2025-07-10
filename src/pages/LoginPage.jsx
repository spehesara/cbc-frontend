import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function LoginPage() {

const[email,setEmail] = useState("Your Email ");
const[password,setPassword] = useState("");

function login(){

axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login",{

email : email,
password : password


}).then((res)=>{

if(res.data.user == null){
toast.error(res.data.message)

return

}


localStorage.setItem("token",res.data.token)
if(res.data.user.type == "admin"){
window.location.href = "/admin"

}else{
window.location.href = "/"

}


}).catch((err)=>{

  console.log(err)
})

}


  return (
    <div className='bg-red-700 w-full h-screen flex justify-center items-center '>

<div className='bg-blue-700 w-[450px] h-[450px]  flex justify-center items-center flex-col'>

<img src="/logo.jpg" className="rounded-full w-[100px]" />

<span>Email</span>
<input defaultValue={email} onChange={
(e)=>{
setEmail(e.target.value)

}

}/>
<span>Password</span>
<input type='password'defaultValue={password} onChange={

(e)=>{
setPassword(e.target.value)

}

}/>
<button className='bg-white' onClick={login}>Login</button>

</div>





    </div>
  );
}

