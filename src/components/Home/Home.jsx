import React,{useState} from 'react'
import Header from '../Header'
import Footer from "../Footer"
import About from "../Home/Aboutus"
import { Carousel} from 'react-bootstrap'

import Slider from './Slider'
import Slider1 from './Slider1'
const Home = () => {
    const [index , setIndex] = useState(0);
    const handleSelect = (selectedIndex ,e) =>{
      setIndex(selectedIndex);
    };
  return (
    <>
      
      
    <Header/>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Slider/>
      </Carousel.Item>
      <Carousel.Item>
        <Slider1/>
      </Carousel.Item>
    </Carousel>
    <About/>
    <Footer/>
    
    </>
  )
}

export default Home