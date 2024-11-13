// import React from 'react'
// import Title from 'react-vanilla-tilt'
import Card from '../cards/card'
import styles from './course_container.module.css'
// import Card2 from '../card2/card2';
import { motion } from 'framer-motion'
// import AOS from "aos";
// import "aos/dist/aos.css";
// import React, { useEffect } from 'react'
// import Card2 from '../card2/card2';
function Course_container() {
    const variants={
        hide:{y: 0 },
        show:{ y: 300},
        scole:{y:0},
        
    }

    // useEffect(() => {
    //     AOS.refresh({
    //         offset: 200,
    //         duration: 600,
    //         easing: 'ease-in-sine',
    //         delay: 100
    //     })
    // },[])
    return (
        <>
            <div className='container-flude'>


                <div className={`${styles.course_container} container mt-5`}>
                    <div className='row'>
                        <motion.div
                           variants={variants}
                            initial="hide"
                            animate="show"
                            whileInView="scole"
                            transition={{ease:"easeOut",type:"spring"}}

                            className='col-lg-6 col-md-12 col-sm-12' >
                            <Card />
                        </motion.div>
                        <motion.div
                            variants={variants}
                            initial="hide"
                            animate="show"
                            whileInView="scole"
                            transition={{ease:"easeOut",type:"spring"}}
                            className='col-lg-6 col-md-12 col-sm-12'>
                            <Card />
                        </motion.div>
                        <motion.div
                            variants={variants}
                            initial="hide"
                            animate="show"
                            whileInView="scole"
                            transition={{ease:"easeOut",type:"spring"}}
                            className='col-lg-6 col-md-12 col-sm-12'>
                            <Card />
                        </motion.div>
                        <motion.div
                            variants={variants}
                            initial="hide"
                            animate="show"
                            whileInView="scole"
                            transition={{ease:"easeOut",type:"spring"}}
                            className='col-lg-6 col-md-12 col-sm-12'>
                            <Card />
                        </motion.div>
                        <motion.div
                            variants={variants}
                            initial="hide"
                            animate="show"
                            whileInView="scole"
                            transition={{ease:"easeOut",type:"spring"}}
                            className='col-lg-6 col-md-12 col-sm-12'>
                            <Card />
                        </motion.div>
                        <motion.div
                            variants={variants}
                            initial="hide"
                            animate="show"
                            whileInView="scole"
                            transition={{ease:"easeOut",type:"spring"}}
                            className='col-lg-6 col-md-12 col-sm-12'>
                            <Card />
                        </motion.div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Course_container