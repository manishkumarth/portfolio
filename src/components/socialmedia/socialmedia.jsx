import React from 'react'

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

import {Link} from 'react-router-dom'

function Socialmedia() {
  return (
    <div>
        <ul className='social55'>
    <li className=''>
      <Link to="https://www.facebook.com" target="_black" className="socialall" href=""><FaFacebookSquare /></Link>
    </li>
    <li>
      <Link to="https://in.linkedin.com/" target="_black"  className="socialall" href=""><FaLinkedin /></Link>
    </li>
    <li>
      <Link to="https://www.instagram.com/" target="_black"  className="socialall" href=""><BsInstagram /></Link>
    </li>
    <li>
      <Link to="https://github.com/manishkumarth" target="_black"  className="socialall" href=""><FaGithubSquare />
      </Link>
    </li>
    
    </ul>
  </div>
  )
}

export default Socialmedia