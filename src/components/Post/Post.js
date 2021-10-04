import React from 'react'
import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'
import './Post.scss'

const Post = ({ time, title, body, img }) => {
  return (
    <div className='post'>
      <div className='content'>
        <div className='img-container'>
          <img src={img} alt={title}></img>
        </div>
        <div className='text-container'>
          <Link to='#!'>
            <p className='time'>
              <span>{time}</span>
            </p>
            <TextTruncate
              className='title'
              line={3}
              element='h2'
              truncateText='...'
              text={title}
            />
            <TextTruncate
              className='body'
              line={2}
              element='p'
              truncateText='...'
              text={body}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Post
