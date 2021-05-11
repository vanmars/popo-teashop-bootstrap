import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.scss';

const MyCarousel = ({images}) => {
  return ( 
    <Carousel>

      {images.map((image, idx) => 
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={image.src}
            alt=""
          />
          <Carousel.Caption>
            <h3>{image.caption}</h3>
            <p>{image.subCaption}</p>
          </Carousel.Caption>
        </Carousel.Item> 
      )}

    </Carousel>
   );
}
 
export default MyCarousel;