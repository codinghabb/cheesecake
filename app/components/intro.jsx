import React from 'react'
import Image from 'next/image'
import Cheese from '../images/about.png'

function Intro() {
  return (
    <div className='c'>
       <Image src={Cheese} alt='cheese' />  
       <div className='st'>
            <h1 className="text">We Love Cheesecake</h1>
            <h4>Discover Our Cheesecake Story</h4>
            <p>At Cheesecake Love, quality is our cornerstone. Each <br />
             cheesecake is crafted with the finest ingredients, <br />
              meticulous attention to detail and a dash of creativity.</p>
            <p>We believe in delivering not just desserts but moments of sheer indulgence</p>
            <button className='dt'> Read More</button>
       </div>
       
    </div>
  )
}

export default Intro