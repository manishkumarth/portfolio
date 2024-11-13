import React from 'react'
import {motion} from 'framer-motion'
// import Socialmedia from '../socialmedia/socialmedia'
function Contact() {
  return (
    <motion.div
    initial={{
      x: "100vw",
      rotate: 10
    }}
    animate={{
      x: 0,
      rotate: 0
    }}
    transition={{type:"spring", stiffness:100}}
    > 
    <div className=' contactpage' style={{width:"100%",height:"100%"}}> 
    <div className='container '>
      <div className='row'>
        {/* img section contact page  */}
        <div className='col-lg-6 col-sm-12'>
          <img className='p-4' style={{width:"100%",height:"auto"}} src="./public/img/contactpageimg.png" alt="" />
        </div>
        {/* form section contact page  */}
        <div className='col-lg-6 col-sm-12'>
          <img className='' src="./public/img/messagelogo.png" alt="" style={{width:"auto",height:"130px",marginLeft:"200px"}}/>
          <div className='rightside_contact'>
          <form action="" className='formpage'>
            <input type="text" placeholder='enter your name'/> <br />
            <input type="text" placeholder='enter your email'/> <br />
            <textarea type="text" cols="10" rows="20" placeholder='enter your queary'/> <br />
            <button className='bg-primary fs-5 btn btn_contact'>contact</button>
            <div className='mt-4'>
              {/* <Socialmedia /> */}
            </div>
           
          </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    </motion.div>
  )
}

export default Contact