import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top-box'>
        <div className='inner-box'>
          <h5 className='footer-logo'>LOGO TEST</h5>
          <div className='line'></div>
          <p>©2021 test.com</p>
        </div>
        <ul className='categories'>
          {categories.map((category) => (
            <li key={category.title}>
              <Link to={category.path}>{category.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='bottom-box'>
        <ul className='social-media'>
          <li>
            <Link to='#!' rel='noopener noreferrer' target='_blank'>
              <FaTwitterSquare />
              <span>Twitter</span>
            </Link>
          </li>
          <li>
            <Link to='#!' rel='noopener noreferrer' target='_blank'>
              <FaFacebookSquare />
              <span>Facebook</span>
            </Link>
          </li>
        </ul>
        <ul className='footer-links'>
          <li>
            <Link to='#!'>Polityka prywatności</Link>
          </li>
          <li>
            <Link to='#!'>Regulamin</Link>
          </li>
          <li>
            <Link to='#!'>Kontakt</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
