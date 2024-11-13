import React from 'react'
import {Routes,Route, useLocation } from 'react-router-dom'
import Contact from './contact/contact'
import Project from './project/project'
import Home from './home/home'
import Profile from './profile/profile'
import {AnimatePresence} from 'framer-motion'
import Nav from './nav/nav'
import Footer from './footer/footer'
function MotionContainer() {
    const location=useLocation()
  return (
    <>   
    <Nav />
    <AnimatePresence initial={false}>
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/home' element={<Home />}/> */}
        <Route path='/profile' element={<Profile />}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </AnimatePresence>
    <Footer />
    </>

  )
}

export default MotionContainer