import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import classes from './ImageLoader.module.css'

export default (imageSrc, altText) => (
  <div className={classes.basicImage}>
    <Carousel>
      <div>
        <img src={imageSrc} alt={altText} />
      </div>
    </Carousel>
  </div>
)
