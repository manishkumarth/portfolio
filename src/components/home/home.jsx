import { motion } from 'framer-motion'


import styles from './home.module.css'
import Contact from '../contact/contact';
import Course_container from '../course_container/course_container';
// import Project from '../project/project';
import Slidercard from '../slidercard/slidercard';
import Skills from '../skills/skills';

// import Footer from '../footer/footer';
import Hero from '../hero/hero';
import Galary from '../galary/galary';
import Projectcard from '../projectcard/projectcard';
import Projectcardall from '../projectcard/projectcardall';
import Onebadacard from '../badacard/onebadacard';
import Galaryanimate from '../../components2/galaryanimate/galaryanimate';


// import Course_container from '../course_container/course_container';

function Home() {


  return (
    <>
      <div
        // initial={{
        //   x: "100vw",
        //   rotate: 10
        // }}
        // animate={{
        //   x: 0,
        //   rotate: 0
        // }}
        // transition={{ type: "spring", stiffness: 100 }}
      >
    
        <div>
          {/* hero section   */}
          <Hero />
          </div>
        
        <div>
          {/* one bada card here */}
            {/* <Onebadacard /> */}
          <Galaryanimate />

        </div>
        <div className='projectcard-home-page mt-5 '>
          {/* project center  */}
          <Projectcardall/>
        </div>
        <div className={`${styles.dwonSection}  container skills-style dwonSection my-4`}>
          {/* <h2 className='text-light'> skills gained</h2> */}
          <Skills />
        </div>
        <div className='mt-5'>
        <Galary />
      </div>
      
      {/* <div className=''> */}
      <div className=''>
        <Course_container />
      </div>
      
      {/* review card here  */}
      <div>
        <Slidercard />
      </div>
      {/* others section  contact ssection here */}
      <div className='mt-5 contact-home' style={{ width: "100%", height: "auto" }}> <Contact /> </div>
      {/* <div className='bg-primary fft' style={{height:"auto"}}><Footer /></div> */}
      </div>
    </>
  )
}

export default Home

