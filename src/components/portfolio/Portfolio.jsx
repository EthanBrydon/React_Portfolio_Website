import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <h3>Portfolio Item Title</h3>
            <a href=""></a>
          </div>
        </article>
      </div> 
    </section>
  )

}

export default Portfolio