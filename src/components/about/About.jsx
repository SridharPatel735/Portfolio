import React from 'react'
import './About.css'
import ME from '../../assets/aboutImg.jpg'
import { IoCodeSlash } from "react-icons/io5";
import { AiOutlineDatabase } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa6";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <IoCodeSlash className='about__icon'/>
              <h5>Web Dev</h5>
              <small>Experience in Web Dev</small>
            </article>
            <article className='about__card'>
              <AiOutlineDatabase className='about__icon'/>
              <h5>Databases</h5>
              <small>Experience with SQL and MongoDB</small>
            </article>
            <article className='about__card'>
              <FaLaptopCode className='about__icon'/>
              <h5>Full Stack</h5>
              <small>Experience in Full Stack</small>
            </article>
          </div>
          <p>
            As a third-year software engineering student at the University of Western Ontario, I'm excited to share my journey with you through this digital portfolio. Here, you'll discover how creativity and innovation intertwine in my experiences, skills, and projects. My dedication to software engineering and my commitment to achieving meaningful outcomes are evident throughout. Join me on this visual journey, and please don't hesitate to connect!
          </p>
          <a href="#contact" className='btn btn-primary'>Contact Me!</a>
        </div>
      </div>
    </section>
  )
}

export default About