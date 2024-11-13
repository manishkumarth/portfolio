import React from 'react'
import Socialmedia from '../socialmedia/socialmedia'

function Footer() {
  return (
    <div className='container-flued bg-dark '>
        <div className='container' style={{height:"auto"}}>
         <div className='row'>
          {/* left footer section  */}
          <div className='footer-a-tag col-lg-6 col-md-6 col-sm-6 text-light '>
          <div className='container'>
            <div className='row'>
              <div className='footer-a-tag col-6'>
              <a href='#'>Ecommerce </a>
           <a href='#'>Digital marketing</a>
           <a href='#'>Software dev</a>
           <a href='#'>Cyber security </a>
           <a href='#'>Cloud Service </a>
           <a href='#'>Cyber security </a>
           <a href='#'>Cloud Service </a>

              </div>
              <div className='footer-a-tag col-6'>
              <a href='#'>Ecommerce </a>
           <a href='#'>Digital marketing</a>
           <a href='#'>Software </a>
           <a href='#'>Cyber security </a>
           <a href='#'>Cloud Service </a>
           <a href='#'>Cyber security </a>
           <a href='#'>Cloud Service </a>

              </div>
            </div>
          </div>
          </div>
          {/* right footer section  */}
          <div className='col-lg-6 col-md-6 col-sm-6 text-light text-center'>
            <h3>@Lorem ipsum dolor sit amet.</h3>
            <h3>@Lorem ipsum dolor sit amet.</h3>
            <h3>@Lorem ipsum dolor sit amet.</h3>
            {/* <h3>Lorem ipsum dolor sit amet.</h3> */}
            <div>   <Socialmedia /></div>
       
          </div>
         </div>
        </div>
        <div className='bg-warning' style={{width:"100%",height:"5vh"}}>
          <h4><marquee behavior="" direction="">@1991! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, natus praesentium odit aliquid harum nihil.</marquee></h4>
        </div>
    </div>
  )
}

export default Footer