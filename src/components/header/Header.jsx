import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/mainImg.png'
import HeaderSocials from './HeaderSocials'
import Typewriter from 'typewriter-effect'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Sridhar Patel")
                .start();
            }}
          />
        </h1>
        <h5 className="text-light">Software Engineering Student</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header