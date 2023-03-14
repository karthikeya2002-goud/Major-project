import React,{useState,useEffect} from 'react'
import Header from '../Header'
import "./css/courtServices.css"
import DisplayData from './DisplayData'

const CourtServices = () => {

  
  return (
    <>
      <Header/>
      <div className="content container">
       <DisplayData/>
        <hr/>
      </div>
      <div className='content'>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe width="1230" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=High%20court%20,Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed" >
            </iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourtServices



