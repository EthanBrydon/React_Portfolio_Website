import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='clien__avatar'>
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Average Joe</h5>
          <small className='client__review'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt mollitia natus iste enim hic,  
            nihil nesciunt quis dolorum ducimus corrupti recusandae 
            vitae reiciendis delectus harum aliquid vero molestias pariatur! Nam?
          </small>
        </article>
        <article className='testimonial'>
          <div className='clien__avatar'>
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Average Joe</h5>
          <small className='client__review'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt mollitia natus iste enim hic,  
            nihil nesciunt quis dolorum ducimus corrupti recusandae 
            vitae reiciendis delectus harum aliquid vero molestias pariatur! Nam?
          </small>
        </article>
        <article className='testimonial'>
          <div className='clien__avatar'>
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Average Joe</h5>
          <small className='client__review'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt mollitia natus iste enim hic,  
            nihil nesciunt quis dolorum ducimus corrupti recusandae 
            vitae reiciendis delectus harum aliquid vero molestias pariatur! Nam?
          </small>
        </article>
        <article className='testimonial'>
          <div className='clien__avatar'>
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Average Joe</h5>
          <small className='client__review'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt mollitia natus iste enim hic,  
            nihil nesciunt quis dolorum ducimus corrupti recusandae 
            vitae reiciendis delectus harum aliquid vero molestias pariatur! Nam?
          </small>
        </article> 
      </div>
    </section>
  )
}

export default Testimonials