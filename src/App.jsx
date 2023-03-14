import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home/Home"
import ContactUs from './components/Home/Contact'
import CourtServices from './components/CourtServices/CourtServices'
import BookAppointment from './components/BookAppointment/BookAppointment'
import Login from "./components/Auth/Login" 
import SignUp from "./components/Auth/SignUp"
import LawyerDetails from './components/Lawyer Details/LawyerDetails'
// import PrivateRoutes from './utils/PrivateRoutes'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/home" element={<Home/>} exact/>
      <Route path="/courtservices" element={<CourtServices/>}/>
      <Route path="/appointment" element={<BookAppointment/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/details" element={<LawyerDetails/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App