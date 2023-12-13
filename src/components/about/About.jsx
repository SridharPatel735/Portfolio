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
              <small>Experience with SQL</small>
            </article>
            <article className='about__card'>
              <FaLaptopCode className='about__icon'/>
              <h5>Full Stack</h5>
              <small>Experience in Full Stack</small>
            </article>
          </div>
          <p>
            I am a Full Stack Web Developer with a passion for learning and creating. I have experience in HTML, CSS, JavaScript, React, Node.js, Express, SQL, and Python. I am a graduate of the University of Texas at Austin with a Bachelor of Science in Electrical and Computer Engineering. I am currently seeking a full-time position as a Full Stack Web Developer.
          </p>
          <a href="#contact" className='btn btn-primary'>Contact Me!</a>
        </div>
      </div>
    </section>
  )
}

export default About