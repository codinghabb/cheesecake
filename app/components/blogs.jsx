import React from 'react'
import Image from 'next/image'
import Chefs from '../images/chefs.png'
import Gluten from '../images/Gluten.png'
import Customer from '../images/customer.png'

function Blogs() {
  return (
    <>
          <h2 style={{ textAlign: "center", color: " rgb(106, 43, 25)", marginBottom: "10px",  fontSize: "2.5rem" ,marginTop: "50px" }}>Our BLog</h2>
          <p style={{ textAlign: "center", color: " rgb(106, 43, 25)", marginBottom: "50px",  fontSize: ".9rem"  }}>Our Recent posts</p>


        <div className='menu'>
            <div className='b'>
                <Image src={Chefs} alt='' />
                <p>22 Nov, 2023/Cheesecake</p>
                <h3>a peek Behind the Cheesecake Curtain</h3>
                <h6>Step into our cheesecake haven, where the magic unfolds behind the scenes, <br /> whisking dreams ino reality. Our Kitchen is a symphony and very...</h6>
                <button style={{border: "none", background:"none", fontWeight: "bold"}}>Read More</button>
            </div>
            <div className='b'>
                <Image src={Gluten} alt='' />
                <p>22 Nov, 2023/Cheesecake</p>
                <h3>a peek Behind the Cheesecake Curtain</h3>
                <h6>Step into our cheesecake haven, where the magic unfolds behind the scenes, <br /> whisking dreams ino reality. Our Kitchen is a symphony and very...</h6>
                <button style={{border: "none", background:"none", fontWeight: "bold"}}>Read More</button>
            </div>
            <div className='b'>
                <Image src={Customer} alt='' />
                <p>22 Nov, 2023/Cheesecake</p>
                <h3>a peek Behind the Cheesecake Curtain</h3>
                <h6>Step into our cheesecake haven, where the magic unfolds behind the scenes, <br /> whisking dreams ino reality. Our Kitchen is a symphony and very...</h6>
                <button style={{border: "none", background:"none", fontWeight: "bold"}}>Read More</button>
            </div>
      
        </div>
    
    </>
  )
}

export default Blogs