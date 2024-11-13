import React from 'react';
// import {motion} from 'framer-motion'
function Card() {


  return (
   <div>
    <div
   
    className="card mb-3 bg-dark text-light" style={{width: "auto",height:"100%"}}>
       
  <div className="row g-0">
    <div className="col-md-4 col-sm-12">
      <img src="https://cdn.pixabay.com/photo/2014/08/25/22/55/business-card-427520_1280.png" className=" rounded-start" alt="..."
      style={{width:"100%"}}
      />
    </div>
    <div className="col-md-8 col-sm-12">
      <div className="card-body">
        <h5 className="card-title">hellow card</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Card