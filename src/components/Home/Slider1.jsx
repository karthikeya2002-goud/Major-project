import React from "react";
import background from "../../assets/justice.jpg";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap'

import "./CSS/Slider1.css"

const Slider1 = () => {
  return (
    <div
      className="Slider1 section__padding"
      id="Slider1"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
      }}
    >
      <div className="Slider1--content">
        <div className="Slider1--col">
          <p className="">
          Best law firm, our fight is for your justice
          </p>
          <Button variant="dark"><Link to={"/appointment"}>
          Get Appointment
          </Link></Button>
          
        </div>
      </div>
    </div>
  );
};

export default Slider1;
