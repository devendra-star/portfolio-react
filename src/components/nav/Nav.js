import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome /></a>
      <a href="#about" onChange={() => setActiveNav} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onChange={() => setActiveNav} className={activeNav === '#experience' ? 'active' : ''}> <BiBook /></a>
      <a href="#services" onChange={() => setActiveNav} className={activeNav === '#services' ? 'active' : ''}> <RiServiceLine /></a>
      <a href="#contact" onChange={() => setActiveNav} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}
export default Nav