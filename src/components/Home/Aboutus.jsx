import React from 'react'
import about from '../../assets/about.jpg'
import './CSS/aboutus.css'
const Aboutus = () => {
  return (
    <div className='about section__padding  mt-2 mb-2 bg-dark text-light' id='about'>
      <div className='container about--content'>
        <div className='row about--row'>
          <div className='col col-md-12 col-lg-6 col-sm-12 about--col'>
            <img src={about}  alt='' />
          </div>
          <div className='col col-md-12 col-lg-6 col-sm-12 about--col about--col_content'>
            <h3>About Us</h3>
            <p>We provide very reliable and efficient legal solutions</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              non, reprehenderit accusantium voluptatem dicta nobis similique
              rerum aperiam laboriosam, maiores iusto delectus est. Labore
              sapiente corrupti veniam earum consequatur fugit?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
