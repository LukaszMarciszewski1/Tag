import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'

const Navbar = () => {
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false)
  const toggleHamburger = () => setHamburgerIsActive((active) => !active)

  return (
    <nav className='navbar'>
      <div className='top-bar'>
        <div className='wrapper'>
          <ul className='social-media'>
            <li>
              <Link to='/'>
                <FaTwitterSquare />
                Twitter
              </Link>
            </li>
            <li>
              <Link to='/'>
                <FaFacebookSquare />
                Facebook
              </Link>
            </li>
          </ul>
          <button
            className={`hamburger ${
              hamburgerIsActive ? 'hamburger--active' : ''
            }`}
            onClick={toggleHamburger}
          >
            <div>
              <span></span>
            </div>
          </button>
        </div>
        <h3 className='logo'>Logo Test</h3>
      </div>
      <div className='navigation'>
        <ul>
          <li>
            <Link to='/'>Kategoria 1</Link>
          </li>
          <li>
            <Link to='/'>Kategoria 2</Link>
          </li>
          <li>
            <Link to='/'>Kategoria 3</Link>
          </li>
          <li>
            <Link to='/'>Kategoria 4</Link>
          </li>
          <li>
            <Link to='/'>Kategoria 5</Link>
          </li>
        </ul>
      </div>
      <div className='breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Strona główna</Link>
          </li>
          <div>/</div>
          <li>
            <Link to='/Tag'>Tag</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
