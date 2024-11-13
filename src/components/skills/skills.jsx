import React from 'react'
// import { createUseStyles } from "react-jss";

function Skills() {
    // const classes=styles()
  return (
   <div className='container bg-dark rounded rounded-5 mt-2  skills-style' style={{height:"100vh"}}>
    {/* <h2 className='text-light'> skills gained</h2> */}
    <div className='row  '>
      <div className='col-lg-3 col-md-6 col-sm-6 text-center'><img className="skills" src="./public/img/htmlcsslogo.png" alt="" style={{width:"200px",height:"200px"}}/> </div>
      <div className='col-lg-3 col-md-6 col-sm-6 text-center'><img className="skills" src="./public/img/jslogo.png" alt="" style={{width:"auto",height:"200px"}} /></div>
      <div className='col-lg-3 col-md-6 col-sm-6 text-center'><img className="skills" src="./public/img/bootstraplogo.png" alt="" style={{width:"auto",height:"200px"}} /></div>
      <div className='col-lg-3 col-md-6 col-sm-6 text-center'><img className="skills" src="./public/img/reactjslogo.png" alt="" style={{width:"auto",height:"200px"}}/></div>
    </div>
  </div>
  )
}

export default Skills

// const styles=createUseStyles({
//     shadow:{
//         filter: "drop-shadow(0, 0, 6, red)"
//     }
// })