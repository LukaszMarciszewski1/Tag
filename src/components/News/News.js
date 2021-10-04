import React from 'react'
import { Link } from 'react-router-dom'
import { news } from '../../data'
import './News.scss'

const Entries = () => {
  return (
    <div className='news'>
      <div className='title'>
        <div className='triangle'></div>
        <h2>Popularne wpisy</h2>
      </div>
      <div className='content'>
        {news.map((entry, index) => (
          <div className='news-link' key={index}>
            <Link to='#!'>
              <span>{entry.title}</span>
               {entry.body}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Entries
