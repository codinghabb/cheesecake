import React from 'react'
import Image from 'next/image'
import Con from '../images/contact.png'

function contact() {
  return (
    <div className='m'>
        <div>
            <h1>Contact Us</h1>
            <p>Need to get in touch with us? Either fill Out the form <br /> with your inquiry or find the departent</p>
              <Image src={Con} alt='' />
        </div>
        <div className='straight'>
            <input type="name" placeholder='Name' style={{padding:'20px', width:'300px', borderRadius: '20px', border:'none', marginBottom:'20px'}} />
            <input type="email" name="" id="" placeholder='Email' style={{padding:'20px', width:'300px', borderRadius: '20px', border:'none' ,marginBottom:'20px'}} />
            <input type="text" name="" id="" placeholder='Your Message...' style={{padding:'20px', width:'300px', borderRadius: '20px', border:'none', marginBottom:'20px'}} />
            <button style={{backgroundColor:'orange',padding:'20px 40px', border:'none',borderRadius:'20px',color:'brown'}}>Contact us now</button>
        </div>
    </div>
  )
}

export default contact