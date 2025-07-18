
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/homePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/signInPage'
import AdminHomePage from './pages/adminHomePage'
import { Toaster } from 'react-hot-toast'
import FileUploadTest from './pages/test'


function App() {
  

  return (

   <div className="bg-primary">

    <BrowserRouter>

    <Toaster/>
    <Routes>

    <Route path="/" element={<HomePage/>} />
    <Route path="/login" element={<LoginPage/>} />
 <Route path="/Signup" element={<SignupPage/>} />
  <Route path="/admin/*" element={<AdminHomePage/>} />
  <Route path="/testing" element={<FileUploadTest/>}/>


    <Route path="/*" element={<HomePage/>} />

    </Routes>
    
    
    
    
    </BrowserRouter>



   </div>
   
  )
}

export default App
