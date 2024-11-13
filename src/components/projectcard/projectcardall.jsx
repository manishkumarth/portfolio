import React from 'react'
import Projectcard from './projectcard'
import styles from './projectall.module.css'
function Projectcardall() {
    return (
        <div className='container-flued'>
            <div className='container rounded'>
                <div className={`${styles.projectcontainer}  row  shadow`}>
                    <div
                        className={`${styles.projects} project col-lg-4 col-md-6  `}>
                        <Projectcard src="./public/img/projectimg1.jpg"
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
                    <div
                        className={`${styles.projects} project col-lg-4 col-md-6  `}>
                        <Projectcard src="./public/img/projectimg2.jpg"
                            titles="E-commerces"
                            details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eaque totam cum expedita aliquid itaque."
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Projectcardall