import React from 'react'
import './Footer.css'
import { BiUpArrow } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li className='sendToTop'><a href="#"><BiUpArrow className='permalink-icon'/></a></li>
      </ul>
    </footer>
  )
}

export default Footer