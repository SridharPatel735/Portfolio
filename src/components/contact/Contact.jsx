import React from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fs8u2vw', 'template_5p7e4wv', form.current, 'rBTIsVX5QX9gVnejX')

    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vasudev0703@gmail.com</h5>
            <a href="mailto:vasudev0703@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaGithub  className='contact__option-icon'/>
            <h4>GitHub</h4>
            <h5>SridharPatel735</h5>
            <a href="https://github.com/SridharPatel735" target='_blank' rel='noreferrer'>View my repository</a>
          </article>
          <article className="contact__option">
            <BsLinkedin  className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Sridhar Patel</h5>
            <a href="https://www.linkedin.com/in/sridhar-patel-6384a122b/" target='_blank' rel='noreferrer'>Connect on LinkedIn</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact