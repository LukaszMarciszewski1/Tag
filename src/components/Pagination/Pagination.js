import React, { useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import './Pagination.scss'

const Pagination = ({
  currentPage,
  maxPostsPerPage,
  totalPosts,
  handleSelectNumberPagination,
  handleBtnArrowPagination,
  maxPageNumberLimit,
  minPageNumberLimit,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / maxPostsPerPage); i++) {
    pageNumbers.push(i)
  }
  
  const pageNumberOfList = [...pageNumbers].slice(0, -1)
  const lastNumberOfList = [...pageNumbers].length
 
  const renderPageNumbers = (
    <>
      {[...pageNumbers].map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <button
              key={number}
              onClick={() => handleSelectNumberPagination(number)}
              className={`pagination-link ${
                number === currentPage ? 'active' : ''
              }`}
            >
              {number}
            </button>
          )
        } else {
          return null
        }
      })}
      {currentPage === pageNumberOfList.length ||
      currentPage === lastNumberOfList ? (
        ''
      ) : (
        <button className='pagination-link'>...</button>
      )}
      
      <button
        onClick={() => handleSelectNumberPagination(lastNumberOfList)}
        className={`pagination-link ${
          currentPage === lastNumberOfList ? 'active' : ''
        }`}
      >
        {lastNumberOfList}
      </button>
    </>
  )
  // useEffect(() => {
  //  console.log(pageNumbers)
  //  console.log(lastNumberOfList)
  // },[pageNumberOfList])

  return (
    <nav className='nav-pagination'>
      <div className='pagination'>
        <button
          className='arrow-btn'
          onClick={() => handleBtnArrowPagination('prev')}
          disabled={currentPage == pageNumbers[0] ? true : false}
        >
          <FaArrowLeft />
        </button>
        {renderPageNumbers}
        <button
          className='arrow-btn'
          onClick={() => handleBtnArrowPagination('next')}
          disabled={currentPage == pageNumbers.length ? true : false}
        >
          <FaArrowRight />
        </button>
      </div>
    </nav>
  )
}

export default Pagination













// import React, { useEffect } from 'react'
// import { FaArrowLeft } from 'react-icons/fa'
// import { FaArrowRight } from 'react-icons/fa'
// import './Pagination.scss'

// const Pagination = ({
//   currentPage,
//   maxPostsPerPage,
//   totalPosts,
//   handleSelectNumberPagination,
//   handleBtnArrowPagination,
//   maxPageNumberLimit,
//   minPageNumberLimit,
// }) => {
//   const pageNumbers = []

//   for (let i = 1; i <= Math.ceil(totalPosts / maxPostsPerPage); i++) {
//     pageNumbers.push(i)
//   }
//   const pageNumberOfList = [...pageNumbers].slice(0, -1)
//   const lastNumberOfList = pageNumbers.pop()
//   const el = [...pageNumberOfList].push(lastNumberOfList)
//   const renderPageNumbers = (
//     <>
//       {pageNumberOfList.map((number) => {
//         if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
//           console.log(number)
//           return (
//             <button
//               onClick={() => handleSelectNumberPagination(number)}
//               className={`pagination-link ${
//                 number === currentPage ? 'active' : ''
//               }`}
//             >
//               {number}
//             </button>
//           )
//         } else {
//           return null
//         }
//       })}
//       <button className='pagination-link'>...</button>
//       <button
//         onClick={() => handleSelectNumberPagination(el)}
//         className={`pagination-link ${
//           currentPage === el ? 'active' : ''
//         }`}
//       >
//         {el}
//       </button>
//     </>
//   )
//   useEffect(() => {
//    console.log(pageNumbers)
//    console.log(currentPage)
//   },[pageNumberOfList])

//   return (
//     <nav className='nav-pagination'>
//       <div className='pagination'>
//         <button
//           className='arrow-btn'
//           onClick={() => handleBtnArrowPagination('prev')}
//           disabled={currentPage == pageNumbers[0] ? true : false}
//         >
//           <FaArrowLeft />
//         </button>
//         {renderPageNumbers}
//         <button
//           className='arrow-btn'
//           onClick={() => handleBtnArrowPagination('next')}
//           disabled={currentPage == pageNumbers.length + 1 ? true : false}
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </nav>
//   )
// }

// export default Pagination