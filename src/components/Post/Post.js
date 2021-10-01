import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import './Post.scss'

const Post = ({time, title, body, img}) => {
  return (
    <div className='post'>
      <div className='content'>
        <div className='img-container'>
          <img src={img} alt={title}></img>
        </div>
        <div className='text-container'>
          <p className='time'>
            <span>{time}</span>
          </p>
          <LinesEllipsis
            className='title'
            component='h2'
            text={title}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
          <LinesEllipsis
            className='body'
            component='p'
            text={body}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>
  )
}

export default Post
