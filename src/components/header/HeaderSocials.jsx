import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ethan-brydon" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/EthanBrydon' target="_blank" rel='noreferrer'><ImGithub/></a>    
    </div>
  )
}

export default HeaderSocials