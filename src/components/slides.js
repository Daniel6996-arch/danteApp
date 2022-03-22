import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './body.css'

const slideImages = [
  {
    url: require('./assets/wallpaper5.jpeg'),
    caption: 'Slide 1'
  },
  {
    url: require('./assets/wallpaper6.jpeg'),
    caption: 'Slide 2'
  },
  {
    url: require('./assets/wallpaper7.jpeg'),
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className='name' style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span className='center'>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;