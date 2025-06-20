
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/homePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/signInPage'
import AdminHomePage from './pages/adminHomePage'


function App() {
  

  return (

   <div className=''>

    <BrowserRouter>
    <Routes>

    <Route path="/" element={<HomePage/>} />
    <Route path="/login" element={<LoginPage/>} />
 <Route path="/Signup" element={<SignupPage/>} />
  <Route path="/admin/*" element={<AdminHomePage/>} />


    <Route path="/*" element={<HomePage/>} />

    </Routes>
    
    
    
    
    </BrowserRouter>



   </div>
   
  )
}

export default App
