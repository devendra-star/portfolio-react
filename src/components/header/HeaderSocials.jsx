import React from 'react'
import './header.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/devendra-yadav-9591171a4/' target='_blank'><BsLinkedin /></a>
            <a href='https://github.com/devendra-star' target='_blank'><FaGithub /></a>
            <a href='' target='_blank'><FiDribbble /></a>
        </div>
    )
}

export default HeaderSocials