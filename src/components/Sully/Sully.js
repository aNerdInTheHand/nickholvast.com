import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { render } from '@testing-library/react'
import images from './images'
import classes from './Sully.module.css'
import shuffleArray from '../../helpers/shuffleArray'

const renderImage = (image, key, width) => (
  <Carousel.Item key={key}>
    <img
      className='d-block'
      src={image.small}
      alt={image.alt}
    />
    <Carousel.Caption>
      <p>{image.text}</p>
    </Carousel.Caption>
  </Carousel.Item>
)

export default () => {
  // get screen width for image loading
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <h1 className={classes.header}>Sully Dog</h1>
      <p>On Thursday 27th June 2019, our beloved Sully Dog walked into the sunset for the last time. He was only six years old and developed an auto-immune illness called thrombocytopenia, common in middle-aged spaniels. Though devastated by his loss, we want to remember the good times, and this page is a tribute to him. Love you buddy, won't be long.</p>
      <Carousel>
        {shuffleArray(images).map((image, key) => renderImage(image, key, width))}
      </Carousel>
    </div>
  )
}
