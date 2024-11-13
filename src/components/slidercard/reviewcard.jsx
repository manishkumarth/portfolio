import React from 'react'
// import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

import { FaStarHalf } from 'react-icons/fa';

function Reviewcard(props) {
  return (
    // review card here 
    <div className='medai1 bg-dark rounded shadow shadow-4' >
     <div className=' rounded imgdiv'>
      <img className='bg-light p-2 rounded rounded-circle ms-4' style={{width:"100px",height:"100px"}} src={props.src} alt="img hai" />
      
      <h2 className='mt-4 me-5 '>{props.name}</h2>
      </div>
     <div>
        <p className='p-2 bg-light text-center'>{props.description}</p>
     </div>
     <div className='bg-dark '><p><FaStar /><FaStar /><FaStar /><FaStar />
     <FaStarHalf />
     </p></div>
    </div>
  )
}

export default Reviewcard