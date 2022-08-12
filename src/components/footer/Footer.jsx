import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {SiZalo} from 'react-icons/si'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>NTA</a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://instagram.com'><FiInstagram/></a>
        <a href='https://chat.zalo.me/'><SiZalo/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Nguyen Thanh An</small>
      </div>
    </footer>
  )
}

export default Footer