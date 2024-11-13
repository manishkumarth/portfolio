import React from 'react'
import { motion } from 'framer-motion'
import Skills from '../skills/skills'
import Socialmedia from '../socialmedia/socialmedia'
import Galary from '../galary/galary'
// import Slidercard from '../slidercard/slidercard'

function Profile() {
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
      transition={{ type: "spring", stiffness: 100 }}
    // style={{width:"100%"}}
    > <div className='bg1c container-flued' style={{ width: "100vw", height: "100%" }}>
        {/* container project components */}
        <div className='container'>
          <div className='row'>
            <div className="left-style-project p-5 col-lg-6">
              {/* left side  */}
              <motion.div
             
    
              transition={{delay:1}}
              className='prfile-img-div border'>
                <img className='prfile-img' src="./public/img/myimg.jpg" alt=""  />
              </motion.div>
              <div className='btn-project'>
                <button className='btn-project-all   bg-light'>Project</button>
                <button className='btn-project-all   bg-dark text-light'>Touch_in</button>
              </div>
            </div>
            <div className="right-style-project  col-lg-6">
              {/* right side  */}
              
                <div className='container left-side-container-profile'>
                  <div className='row '>
                    <div className='col-12 text-light fw-4 rounded left-side-text'>
                      <h6>A web developer is a skilled professional who designs and builds websites using languages like HTML, CSS, JavaScript, and back-end technologies such as Python or Node.js. They work on both the front-end (user interface) and back-end (server-side) to create responsive, functional websites. Web developers focus on optimizing site performance, ensuring security, and enhancing the userexperience. Whether specializing in front-end, back-end, or full-stack development, they stay updated with the latest trends and tools. Web developers may work independently or as part of a</h6></div>
                    
                    <div className='col-12 mt-4 rounded text-light fw-4  left-side-text'>
                      <h6>A web developer is a skilled professional who designs and builds websites using languages like HTML, CSS, JavaScript, and back-end technologies such as Python or Node.js. They work on both the front-end (user interface) and back-end (server-side) to create responsive, functional websites. Web developers focus on optimizing site performance, ensuring security, and enhancing the user experience. Whether specializing in front-end, back-end, or full-stack development, they stay updated with the latest trends and tools. Web developers may work independently or as part of a</h6></div>
                  </div>
                </div>
                  
            </div>
          </div>

        </div>
      </div>

      {/* galary section  */}
      {/* <div>
            <Galary />
      </div> */}
    </motion.div>
  )
}

export default Profile

