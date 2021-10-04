import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data'

import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import './Navbar.scss'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const handleToggleMenu = () => setToggleMenu((active) => !active)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <nav className='navbar'>
      <div className='top-bar'>
        <div className='top-bar-wrapper'>
          <ul className='social-media'>
            <li>
              <Link to='#!' rel='noopener noreferrer' target='_blank'>
                <FaTwitterSquare />
                Twitter
              </Link>
            </li>
            <li>
              <Link to='#!' rel='noopener noreferrer' target='_blank'>
                <FaFacebookSquare />
                Facebook
              </Link>
            </li>
          </ul>
          <button
            className={`hamburger ${toggleMenu ? 'hamburger--active' : ''}`}
            onClick={handleToggleMenu}
          >
            <div>
              <span></span>
            </div>
          </button>
        </div>
        <h3 className='logo'>Logo Test</h3>
      </div>
      {(toggleMenu || screenWidth > 1000) && (
        <div className='navigation'>
          <ul>
            {categories.map((category) => (
              <li key={category.title}>
                <Link to={category.path}>{category.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
