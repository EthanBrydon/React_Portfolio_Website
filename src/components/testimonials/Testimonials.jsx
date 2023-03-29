import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonials_sections = [
  {
    avatar: AVTR1,
    name: 'Average Joe',
    review: '**Paragraph**'
  },
  {
    avatar: AVTR2,
    name: 'Average Joe',
    review: '**Paragraph**'
  },
  {
    avatar: AVTR3,
    name: 'Average Joe',
    review: '**Paragraph**'
  },
  {
    avatar: AVTR4,
    name: 'Average Joe',
    review: '**Paragraph**'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          testimonials_sections.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt='Avatar'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'> 
                  {review}
                </small>
              </SwiperSlide> 
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials