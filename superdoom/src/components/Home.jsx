import React from 'react'
import img2 from '../assets/images/img2.webp'
import {
  AiFillGoogleCircle, 
  AiFillAmazonCircle, 
  AiFillYoutube, 
  AiFillInstagram
} from "react-icons/ai";


function Home() {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>SuperDoom</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </main>
    </div>
    <div className="home2">
      <img src={img2} alt="Graphics Image" />
      <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab distinctio similique nobis doloremque inventore, temporibus vero ex. Molestiae, modi velit iure dignissimos a at necessitatibus nihil ex quae neque vel!</p>
      </div>
    </div>

    <div className="home3" id="about">
      <div>
        <h1>Who we are ?</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatum amet perspiciatis iure reiciendis, eius deleniti animi illo modi, eligendi reprehenderit nesciunt sequi ipsam expedita beatae magnam enim delectus tenetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatum amet perspiciatis iure reiciendis, eius deleniti animi illo modi, eligendi reprehenderit nesciunt sequi ipsam expedita beatae magnam enim delectus tenetur.</p>
      </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
         <article>
          <div style={{
            animationDelay: '0.3s'
          }}>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>

          <div style={{
            animationDelay: '0.5s'
          }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>

          <div style={{
            animationDelay: '0.7s'
          }}>
            <AiFillYoutube />
            <p>Youtube</p>
          </div>

          <div style={{
            animationDelay: '1s'
          }}>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
         </article>
      </div>
    </div>
    </>
  )
}

export default Home