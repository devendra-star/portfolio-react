import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Emails</h4>
            <h5>devyadav3001@gmail.com</h5>
            <a href="mailto:devyadav3001@gmail.com">Emails</a>

          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Devendra Yadav</h5>
            <a href="https://www.facebook.com/devyadav3001/">facebook</a>

          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>whatsapp</h4>
            <h5>6387186933</h5>
            <a href="https://web.whatsapp.com/">sen a Message</a>

          </article>
        </div>
        <form action="">
          <input type='text' name='name' placeholder='Your Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Youir Message' required ></textarea>
          <button type='submit' className='button'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact