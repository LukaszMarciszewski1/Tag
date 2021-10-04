import React, { useContext, useState } from 'react'
import { useLocation } from "react-router-dom";
import { ContextPosts } from '../context/ContextPosts'
import TitleText from '../components/TitleText/TitleText'
import Posts from '../components/Posts/Posts'
import Pagination from '../components/Pagination/Pagination'
import News from '../components/News/News'
import './Tag.scss'

const Tag = () => {
  const { posts } = useContext(ContextPosts)
  const [currentPage, setCurrentPage] = useState(1)
  const maxPostsPerPage = 6

  const indexOfLastPost = currentPage * maxPostsPerPage
  const indexOfFirstPost = indexOfLastPost - maxPostsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const changePage = ({ selected }) => {
    const element = document.querySelector('.titleWraper')
    const hight = element.clientHeight
    
    setCurrentPage(selected + 1)
    window.scrollTo(0, hight);
  }

  return (
    <main className='tag'>
      <div className='tag-left-panel'>
        <TitleText text='Tag' />
        <Posts posts={currentPosts} />
        <Pagination
          totalPosts={posts.length}
          maxPostsPerPage={maxPostsPerPage}
          changePage={changePage}
        />
      </div>
      <div>
        <News />
      </div>
    </main>
  )
}

export default Tag
