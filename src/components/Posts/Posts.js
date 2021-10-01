import React from 'react'
import Post from '../Post/Post'

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          time={post.time}
          title={post.title}
          body={post.body}
          img={post.img}
        />
      ))}
    </div>
  )
}

export default Posts
