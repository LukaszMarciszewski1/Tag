import React from 'react'
import './Pagination.scss'

const Pagination = ({ maxPostsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / maxPostsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className='nav-pagination'>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
