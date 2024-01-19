import React from 'react'
import Image from 'next/image'
import Logo from '../images/logo.png'
import { FaRegPlayCircle } from "react-icons/fa";
import CHEESE from '../images/cheese.png'

function Nav() {
  return (
    <div className='intro'>

        <div className='top'>
            <Image src={Logo} alt='log' />

            <div className='links'>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Menu</a>
                <a href="">Contact</a>
            </div>

            <button className="t">Sign up</button>
        </div>
       


        <div className="t_p">
            <div className='div'>
                <h1 className="text">Bite The World of Cheesecake Wonders</h1>
                <p>We always make our customer happy as possible</p>
                <div>
                    <button className='d'>Get Started</button>
                    <button className='t'> <FaRegPlayCircle />  Watch Demo</button>
                </div>
            </div>
           <div>
              <Image src={CHEESE} alt='cheese' />
           </div>
        </div>
    </div>
  )
}

export default Nav