import React from 'react'
import background from '../../assets/gavel1.jpg'
import { Link } from 'react-router-dom'
import {Button} from "react-bootstrap"
import "./CSS/Slider.css"
const Slider = () => {
  return (
    <div
      className='slider section__padding'
      id='slider'
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center'
      }}
    >
      <div className='slider--content'>
        <div className='slider--col'>
          <p className='text-alert'>
            We are here to protect any type of violence
          </p>
          <Button variant="dark"><Link to='/contact'>contact us</Link></Button>

        </div>
      </div>
    </div>
  )
}

export default Slider
