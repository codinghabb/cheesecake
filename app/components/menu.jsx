import React from 'react'
import Image from 'next/image'
import Blueberry from '../images/blueberry.png'
import Biscoff from '../images/biscoff.png'
import Choc from '../images/choc.png'
import { FaStar } from "react-icons/fa";
function Menu() {
  return (


    <>  
          <h2 style={{ textAlign: "center", color: " rgb(106, 43, 25)", marginBottom: "50px",  fontSize: "2.5rem"  }}>Our Menu</h2>


        <div className='menu'>
     
      <div className='shadows'>
        <Image src={Blueberry} alt="" />
        <h3>Blueberry Cheesecake</h3>
        <p className="p"></p>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <p>$9</p>
          <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

          </div>
        </div>
      </div>
      <div className='shadows'>
        <Image src={Biscoff} alt="" />
        <h3>Blueberry Cheesecake</h3>
        <p className="p"></p>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <p>$9</p>
          <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

          </div>
        </div>
      </div>
      <div className='shadows'>
        <Image src={Choc} alt="" />
        <h3>Blueberry Cheesecake</h3>
        <p className="p"></p>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <p>$9</p>
          <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

          </div>
        </div>
      </div>
    </div>
    
    </>
    
  )
}

export default Menu