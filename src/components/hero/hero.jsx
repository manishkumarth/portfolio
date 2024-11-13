import React from 'react'
// import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './hero.module.css'
import { Link } from 'react-router-dom';
import Socialmedia from '../socialmedia/socialmedia';
function Hero() {
    console.log("caled")
    return (
        <div><div className={`${styles.homepaps}  container-flued`} style={{ width: "100vw", height: "100%" }}>
            <div className='container'>
                <div className='row'>
                    {/* left text and logos section  */}
                    <div className={`${styles.lefthero1} col-lg-6`} style={{ height: "80vh" }}>
                        {/* <div className={`${styles.leftrow} row`}> */}
                        <h1 className={`${styles.heroheading1}`}>Hi Manish K!</h1>
                        <div className={`${styles.heropara} shadow p-2`}>
                            <p className={`${styles.heropara1}  pt-2`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum maiores voluptatibus debitis quaerat, beatae numquam.

                            </p>
                           
                        </div>
                        {/* btn section  */}
                        <motion.div
                            initial={{ x: "-70vw" }}
                            animate={{ x: 0 }}

                            transition={{type:"spring",stiffness:50}}
                            className={`${styles.btnhero} col btnhero`}>
                            <Link to="/profile">
                                <button className='btn btn-primary px-4 py-2'>CV</button>
                            </Link>
                            <Link to="/contact">
                                <button className='btn btn-primary px-4 py-2'>Hire me</button>
                            </Link>
                        </motion.div>
                        {/* icons social media  */}
                        <motion.div
                        initial={{y:300}}
                        animate={{y:0}}
                        transition={{type:"spring",stiffness:50}}

                         
                            className={`${styles.sociallinks} col borderj mt-5 sociallinks`}>
                            {/* social media componenets  */}
                            <Socialmedia />


                        </motion.div>
                        {/* </div> */}
                    </div>
                    {/* img or here right  section  */}
                    <div className='col-lg-6'>
                        <div className={`${styles.rightimg}  rightimg`}>
                            <motion.div
                                ref={{ x: 100 }}
                                initial={{ y: 360 }}
                                animate={{ y: 0 }}
                                transition={{ type: "spring", stiffness: "100" }}

                            >
                                <img
                                    x
                                    className={`${styles.imghero1} imghero1`} style={{ height: "400px", width: "400px" }} src="./public/img/heroimg.png" alt="hero img" />
                            </motion.div>
                        </div>
                        <span > <h3 className={`${styles.years10} `}>10years <p>Experiance int</p></h3> </span>
                    </div>
                </div>
            </div>


        </div>
        </div>
    )
}

export default Hero