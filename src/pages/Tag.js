import React, { useContext, useState } from 'react'

import { ContextPosts } from '../context/ContextPosts'

import Title from '../components/Title/Title'
import Posts from '../components/Posts/Posts'
import Pagination from '../components/Pagination/Pagination'
import Entries from '../components/Entries/Entries'

const Tag = () => {
  const { posts } = useContext(ContextPosts)
  const [currentPage, setCurrentPage] = useState(1)
  const [maxPostsPerPage] = useState(1)
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const indexOfLastPost = currentPage * maxPostsPerPage
  const indexOfFirstPost = indexOfLastPost - maxPostsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const numberOfPages = Math.ceil(posts.length / maxPostsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const handleBtnArrowPagination = (select) => {
    if(select === 'prev'){
      if(currentPage == 1) return
      if ((currentPage - 1) % pageNumberLimit == 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
      setCurrentPage(currentPage - 1)
    }
    if(select === 'next'){
      if(currentPage === numberOfPages) return
      if (currentPage + 1 > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
      setCurrentPage(currentPage + 1)
    }
  }


  return (
    <main>
      <Title text='Tag' />
      <Posts posts={currentPosts} />
      <Pagination
        currentPage={currentPage}
        maxPostsPerPage={maxPostsPerPage}
        totalPosts={posts.length}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        paginate={paginate}
        handleBtnArrowPagination={handleBtnArrowPagination}
      />
    </main>
  )
}

export default Tag
