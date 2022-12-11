import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <div className='relative'>
      {/* <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' /> */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading='lazy' src="https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg" alt="banner" />
        </div>
        <div>
          <img loading='lazy' src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" alt="banner" />
        </div>
        <div>
          <img loading='lazy' src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt="banner" />
        </div>
        <div>
          <img loading='lazy' src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="banner" />
        </div>
        <div>
          <img loading='lazy' src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="banner" />
        </div>
        <div>
          <img loading='lazy' src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="banner" />
        </div>
        <div>
          <img loading='lazy' src="https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg" alt="banner" />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
