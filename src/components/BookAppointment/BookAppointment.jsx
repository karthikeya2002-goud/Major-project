import React,{useRef} from 'react'
import Header from '../Header'
import '../BookAppointment/bookAppointment.css'
 
import Emailjs from './Emailjs'
const BookAppointment = () => {
  
  return (
    <>

    <Header/>
    <div className="navBarSpace mb-2">
      <Emailjs/>
    </div>

    </>
  )
}

export default BookAppointment