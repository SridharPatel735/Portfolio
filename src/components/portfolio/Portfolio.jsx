import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolioSOT.jpg'
import IMG2 from '../../assets/portfolioStorify.jpg'
import IMG3 from '../../assets/portfolioTron.jpg'
import IMG4 from '../../assets/portfolioRPG.jpg'
import IMG5 from '../../assets/portfolioPP.png'
import IMG6 from '../../assets/portfolioSD.jpg'

const data = [
  {
    id: 1,
    image: IMG5,
    title: 'PigeonPlex - Cinema Management System',
    github: 'https://github.com/SridharPatel735/PigeonPlex'
  },
  {
    id: 2,
    image: IMG6,
    title: 'Superhero Database Management System',
    github: 'https://github.com/SridharPatel735/Superhero-Database'
  },
  {
    id: 3,
    image: IMG2,
    title: 'Storify - MySQL Database',
    github: 'https://github.com/SridharPatel735/Storify'
  },
  {
    id: 4,
    image: IMG1,
    title: 'SuperOhioThrowdown',
    github: 'https://github.com/SridharPatel735/SuperOhioThrowdown'
  },
  {
    id: 5,
    image: IMG3,
    title: 'Tron Light Cycle',
    github: 'https://github.com/SridharPatel735/Tron'
  },
  {
    id: 6,
    image: IMG4,
    title: 'RPG Game',
    github: 'https://github.com/SridharPatel735/ChooseYourOwnAdventureGameSummative'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn btn-primary' target='_blank' rel='noreferrer'>GitHub</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio