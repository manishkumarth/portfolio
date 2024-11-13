import React from 'react'

function Projectcard(props) {
  return (
    <div className='cardprojects1 shadow card card-hai  mx-auto bg-primary' style={{width:"auto",height:"250px"}} >
        <img className='project-img card-img' src={props.src} alt="imgproject"  />
        <div className='card-body cardbody'>
            {/* text ? */}
            <h3>{props.titles}</h3>
            <p>{props.details}</p>
        </div>
    </div>
  )
}

export default Projectcard