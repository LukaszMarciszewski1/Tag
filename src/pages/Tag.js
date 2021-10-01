import React, { useContext, useState } from 'react'

import { ContextPosts } from '../store/ContextPosts'

import Title from '../components/Title/Title'
import Posts from '../components/Posts/Posts'
import Pagination from '../components/Pagination/Pagination'

const Tag = () => {
  const { posts } = useContext(ContextPosts)
  const [currentPage, setCurrentPage] = useState(1)
  const [maxPostsPerPage] = useState(8)

  const indexOfLastPost = currentPage * maxPostsPerPage
  const indexOfFirstPost = indexOfLastPost - maxPostsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <main>
      <Title text='Tag' />
      <Posts posts={currentPosts} />
      <Pagination
        maxPostsPerPage={maxPostsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </main>
  )
}

export default Tag
