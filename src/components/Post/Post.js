import React, { useState, useEffect } from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import TextTruncate from 'react-text-truncate'
import './Post.scss'

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

const Post = ({ time, title, body, img }) => {
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
          {/* <ResponsiveEllipsis
            className='title'
            component='h2'
            text={title}
            maxLine='3'
            ellipsis='...'
            basedOn='letters'
          />
          <ResponsiveEllipsis
            className='body'
            component='p'
            text={body}
            maxLine='2'
            ellipsis='...'
            basedOn='letters'
          /> */}
          <TextTruncate
            className='title'
            line={3}
            element='h2'
            truncateText='...'
            text={title}
          />
          <TextTruncate
            className='body'
            line={3}
            element='p'
            truncateText='...'
            text={body}
          />
        </div>
      </div>
    </div>
  )
}

export default Post
