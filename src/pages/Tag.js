import React, { useContext, useEffect, useState } from 'react'

import { ContextPosts } from '../store/ContextPosts'

import Title from '../components/Title/Title'
import Posts from '../components/Posts/Posts'

const Tag = () => {
  const { posts, firstPost } = useContext(ContextPosts)
  
  return (
    <main>
      <Title text='Tag' />
      <Posts posts={posts} />
    </main>
  )
}

export default Tag
