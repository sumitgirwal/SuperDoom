import React from 'react'
import {Carousel} from "react-responsive-carousel";
import img2 from '../assets/images/img2.webp';
import img3 from '../assets/images/img3.webp';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Services() {
  return (
    <div className='services'>
        <Carousel 
            infiniteLoop
            autoPlay
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            interval={2000}

        >
            <div>
                <img src={img2} alt="Item1" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img3} alt="Item3" />
                <p className='legend'>React Developer</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services