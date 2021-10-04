import React from 'react'
import ReactPaginate from 'react-paginate'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import './Pagination.scss'

const Pagination = ({
  totalPosts,
  maxPostsPerPage,
  changePage,
}) => {
  
  const pageCount = Math.ceil(totalPosts / maxPostsPerPage)

  return (
    <ReactPaginate
    previousLabel={<FaArrowLeft />}
    nextLabel={<FaArrowRight />}
    pageCount={pageCount}
    onPageChange={changePage}
    pageRangeDisplayed={3}
    marginPagesDisplayed={1}
    containerClassName={'paginationBttns'}
    previousLinkClassName={'previousBttn'}
    nextLinkClassName={'nextBttn'}
    disabledClassName={'paginationDisabled'}
    activeClassName={'paginationActive'}
  />
  )
}

export default Pagination















// import React, { useState, useEffect } from 'react'
// import { FaArrowLeft } from 'react-icons/fa'
// import { FaArrowRight } from 'react-icons/fa'
// import './Pagination.scss'

// const Pagination = ({
//   currentPage,
//   totalPages,
//   handleSelectNumberPagination,
//   pageNumberLimit,
//   // maxPageNumber,
//   // minPageNumber
//   // arrOfCurrentPages,
// }) => {

//   const [arrOfCurrentPages, setArrOfCurrentPages] = useState([])
//   const [maxPageNumber, setMaxPageNumber] = useState(5)
//   const [minPageNumber, setMinPageNumber] = useState(0)
//   const pageNumbers = []

//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i)
//   }

//   const renderNumberOfPages = arrOfCurrentPages.map((page) => {
//       return(
//         <>
//         <button
//         key={page}
//         className={`pagination-link ${currentPage === page ? 'active' : ''}`}
//         onClick={() => handleSelectNumberPagination(page)}
//       >
//         {page}
//       </button>
//       </>
//       )

//   })

//   useEffect(()=>{
    
//    let tempNumberOfPages = [...pageNumbers]
//    const sliced = pageNumbers.slice(0, maxPageNumber)
//    if(currentPage <= maxPageNumber - 1){
//      tempNumberOfPages = [...sliced, '...', pageNumbers.length]
//    }
//    setArrOfCurrentPages(tempNumberOfPages)
//   }, [currentPage])

//   return (
//     <nav className='nav-pagination'>
//       <div className='pagination'>
//         <button
//           className='arrow-btn'
//           onClick={() => handleSelectNumberPagination((prev) => prev - 1)}
//           disabled={currentPage === 1 ? true : false}
//         >
//           <FaArrowLeft />
//         </button>
//         {renderNumberOfPages}
//         <button
//           className='arrow-btn'
//           onClick={() => handleSelectNumberPagination((prev) => prev + 1)}
//           disabled={currentPage === pageNumbers.length ? true : false}
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </nav>
//   )
// }

// export default Pagination
