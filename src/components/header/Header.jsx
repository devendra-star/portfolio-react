import React from 'react'
import './header.css'
import ME from '../../assets/dev.jpeg'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Devendra Yadav</h1>
        <h5 className='text-light'>Reactjs Devlopment</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='me' className='img' />
        </div>
        <a href='#contact' className='scroll__down'>Scrol Down</a>
      </div>
    </header>
  )
}

export default Header