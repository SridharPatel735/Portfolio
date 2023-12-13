import React from 'react'
import Resume from "../../assets/Sridhar'sResume.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA