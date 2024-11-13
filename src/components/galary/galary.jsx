import React, {   useState } from 'react'
const galaryimg=[
    "./public/galaryimg/img1.jpg",
    "./public/galaryimg/img2.jpg",
    "./public/galaryimg/img3.jpg",
    "./public/galaryimg/img4.jpg",
    "./public/galaryimg/img5.jpg"
]

function Galary() {
    
    
    const [img1,Setimg1]=useState(galaryimg[0].toString())
  
    const imgchange0=()=>{
        Setimg1(galaryimg[0])
    }
    const imgchange1=()=>{
        Setimg1(galaryimg[1])
    }
    const imgchange2=()=>{
        Setimg1(galaryimg[2])
    }
    const imgchange3=()=>{
        Setimg1(galaryimg[3])
    }
    const imgchange4=()=>{
        Setimg1(galaryimg[4])
    }
    
  return (
    <div className='contianer-flued galary-div '>
        <div><h2 className='bg-dark text-light py-1 fw-1 text-center'>wel come to galary section here</h2></div>
        <div className='container  'style={{width:"100%",height:"72vh"}} >
            <div className='row galarycontainer'>
                <div className='bada-img-galary col-lg-11 col-md-12 col-sm-12 rounded'>
                     {/* bada img here  */}
                    <img src={img1} className='rounded shadow' alt="" style={{width:'100%',height:"100%"}}/> 
                </div>
                <div className='col-lg-1 col-md-12 col-sm-12 text-end changeimg-button' >
                    <button className='border rounded' onClick={imgchange0}><img className='rounded' src={galaryimg[0]} alt="img" style={{height:"50px",width:"100%"}}/></button>
                    <button className='border rounded' onClick={imgchange1}><img className='rounded' src={galaryimg[1]} alt="img" style={{height:"50px",width:"100%"}}/></button>
                    <button className='border rounded' onClick={imgchange2}><img className='rounded' src={galaryimg[2]} alt="img" style={{height:"50px",width:"100%"}}/></button>
                    <button className='border rounded' onClick={imgchange3}><img className='rounded' src={galaryimg[3]} alt="img" style={{height:"50px",width:"100%"}}/></button>
                    <button className='border rounded' onClick={imgchange4}><img className='rounded' src={galaryimg[4]} alt="img" style={{height:"50px",width:"100%"}}/></button>
                </div>
            </div>
            {/* <h1 className='font-weight-bold text-capitalize text-nowrap' style={{ width:"8rem"}}>Galary picture here beautifull</h1> */}
        </div>

    </div>
  )
}

export default Galary

