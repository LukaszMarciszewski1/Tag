import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Breadcrumbs.scss'

const menuItems = [
  {
    name: 'Strona główna',
    path: '/',
  },
  {
    name: 'Tag',
    path: '/Tag',
  },
]

const Breadcrumbs = () => {
  const location = useLocation()
  return (
    <nav className='breadcrumbs'>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link 
              to={item.path}
              className={
                location.pathname === item.path ? "active" : ''
              }
            >
              {item.name}
            </Link>
          </li>
          ))}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
