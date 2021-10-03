import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import './Pagination.scss'

const Pagination = ({
  currentPage,
  maxPostsPerPage,
  totalPosts,
  paginate,
  handleBtnArrowPagination,
  maxPageNumberLimit,
  minPageNumberLimit,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / maxPostsPerPage); i++) {
    pageNumbers.push(i)
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} className='pagination-item'>
          <button
            onClick={() => paginate(number)}
            className={`pagination-link ${
              number === currentPage ? 'active' : ''
            }`}
          >
            {number}
          </button>
        </li>
      )
    } else {
      return null
    }
  })

  let pageIncrementBtn = null
  if (totalPosts > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li className='pagination-item'>
      <button
        onClick={handleBtnArrowPagination}
        className={`pagination-link`}
      >
        &hellip;
      </button>
    </li>
    )
  }

  let pageDecrementBtn = null
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li className='pagination-item'>
      <button
        onClick={handleBtnArrowPagination}
        className={`pagination-link`}
      >
        &hellip;
      </button>
    </li>
    )
  }

  return (
    <nav className='nav-pagination'>
      <ul className='pagination'>
        <button 
        onClick={() => handleBtnArrowPagination('prev')}
        disabled={currentPage == 1 ? true : false}
        >
          <FaArrowLeft />
        </button>
        {pageIncrementBtn}
        {renderPageNumbers}
        {pageDecrementBtn}
        <button 
        onClick={() => handleBtnArrowPagination('next')}
        disabled={currentPage == totalPosts - 1 ? true : false}
        >
          <FaArrowRight />
        </button>
      </ul>
    </nav>
  )
}

export default Pagination
