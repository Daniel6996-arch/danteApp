import React from "react";
import './body.css';
import { Slide } from 'react-slideshow-image'
import wallpaper5 from "./assets/wallpaper5.jpeg"
import wallpaper6 from "./assets/wallpaper6.jpeg"
import wallpaper7 from "./assets/wallpaper7.jpeg"
import wallpaper8 from "./assets/wallpaper8.jpeg"
import wallpaper9 from "./assets/wallpaper9.jpeg"

function Image(props) {
   return <img className="img" src={props.image} alt="wallpaper"></img>
}

function Body() {
    const images = [
        require('./assets/wallpaper5.jpeg'),
        require('./assets/wallpaper6.jpeg'),
        require('./assets/wallpaper7.jpeg'),
        require('./assets/wallpaper8.jpeg'),
        require('./assets/wallpaper9.jpeg')
    ]
    return (
        <div className="full">
                {images.map((image)=> <Image image={image}/>)}
        </div>
    )
}

export default Body;