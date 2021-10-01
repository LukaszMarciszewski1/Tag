import React from 'react'
import './Title.scss'

const Title = ({text}) => {
  return (
    <div className='container'>
      <div className='box'>
        <div className='triangle'></div>
        <h1>{text}</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        proin ac ullamcorper rhoncus. Duis a, facilisis egestas tellus egestas
        aliquam velit viverra. Iaculis pharetra donec mattis odio sed. Interdum
        vel integer sit quisque id dui. Mauris morbi facilisis nunc eu.
      </p>
      <p>
        Est molestie nulla vitae pharetra. Cras et magna ligula nulla aliquam
        imperdiet. Ridiculus sit ut iaculis nunc augue nec. Nulla volutpat
        malesuada scelerisque augue. Varius venenatis etiam at pretium, euismod
        sed. Quisque cursus eget enim vitae vitae aliquet. Erat pellentesque
        amet faucibus ac orci quis condimentum aliquet. Nec orci vivamus risus
        erat feugiat volutpat eget. Ut pharetra, sapien sit hendrerit nisl.
        Lorem molestie tristique praesent quis placerat.
      </p>
      <p>
        Imperdiet in scelerisque elit etiam sed. Placerat sit amet accumsan
        phasellus volutpat turpis id platea. Malesuada lacus non sapien lectus
        urna parturient. Tempor a ullamcorper non in dictum. Est tempus eget
        ultricies sem mauris. Consectetur donec morbi elementum ultrices
        consequat adipiscing malesuada. Vehicula faucibus sit non quam. Lectus
        felis elit eu dolor facilisis consectetur quam.
      </p>
    </div>
  )
}

export default Title
