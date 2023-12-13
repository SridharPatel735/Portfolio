import React from 'react'
import './Nav.css'
import { BiHomeAlt2 } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { FaListUl } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <a href="#"><BiHomeAlt2/></a>
      <a href="#about"><FiUser/></a>
      <a href="#skills"><FaListUl/></a>
      <a href="#portfolio"><FaRegFile/></a>
      <a href="#contact"><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav