import React from 'react'
import { motion } from 'framer-motion'
// import Card2 from '../card2/card2'
import styles from './project.module.css'
import Projectcard from '../projectcard/projectcard'
// import Course_container from '../course_container/course_container'
// import Course_container from '../course_container/course_container'
// import Card2 from '../card2/card2'
// import AOS from 'aos'
// import "aos/dist/aos.css";
// import { useEffect } from 'react'
function Project() {

  return (
    <motion.div
      initial={{
        x: "-100vw",
        rotate: 10
      }}
      animate={{
        x: 0,
        rotate: 0
      }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`${styles.projectbody} bg-dark text-light`}
    >

      <div className='' style={{ width: "100vw", height: "100%" }}>
        <div

          className='container'>
          <motion.h1

            initial={{
              x: "-100vw",
              // rotate: 10
            }}
            animate={{
              x: 0,
              // rotate: 0
            }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className='text-center'
          > wel come to my projexts
          </motion.h1>

          <motion.div
            initial={{
              x: "100vw",
              rotate: 60
            }}
            animate={{
              x: 0,
              rotate: 0
            }}
            transition={{ delay: 1, type: "spring", stiffness: 150 }}
            className={`${styles.projectcontainer} p-4 row  shadow`}>

            <div

              className={`${styles.projects} project col-lg-4 col-md-6  `}>
              <Projectcard src="./public/img/projectimg4.png"
                titles="E-commerces"
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eaque totam cum expedita aliquid itaque."
              />
            </div>
            <div

              className={`${styles.projects} project col-lg-4 col-md-6  `}>
              <Projectcard src="./public/img/projectimg3.png"
                titles="E-commerces"
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eaque totam cum expedita aliquid itaque."
              />
            </div>
            <div

              className={`${styles.projects} project col-lg-4 col-md-6  `}>
              <Projectcard src="./public/img/contactpageimg.png"
                titles="E-commerces"
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eaque totam cum expedita aliquid itaque."
              />
            </div>
            <div

              className={`${styles.projects} project col-lg-4 col-md-6  `}>
              <Projectcard src="./public/img/projectimg3.png"
                titles="E-commerces"
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eaque totam cum expedita aliquid itaque."
              />
            </div>
            <div

              className={`${styles.projects} project col-lg-4 col-md-6  `}>
              <Projectcard src="./public/img/projectimg2.jpg"
                titles="E-commerces"
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eaque totam cum expedita aliquid itaque."
              />
            </div>
            <div

              className={`${styles.projects} project col-lg-4 col-md-6  `}>
              <Projectcard src="./public/img/projectimg1.jpg"
                titles="E-commerces"
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eaque totam cum expedita aliquid itaque."
              />
            </div>
            


            
          </motion.div>
        </div>
       
      </div>
    </motion.div>
  )
}

export default Project