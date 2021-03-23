import React, { useState } from 'react';
import GalleryModal from './shared/GalleryModal';
import { Container } from 'react-bootstrap';


const Gallery = () => {
  const [drinksModalShow, setDrinksModalShow] = useState(false);

  return ( 
    <React.Fragment>
      <Container className="gallery">
        <GalleryModal 
          show={drinksModalShow}
          hide={() => setDrinksModalShow(false)}
          images={[
            "/img/four-fruit-drinks.jpeg",
            "/img/boba.jpeg",
            "/img/drinks-on-table.jpeg",
          ]}
          title="Drinks"
        />

        <div className="gallery-header text-center">
          <h1>Gallery</h1>
        </div>
        <div className="gallery-menu row d-flex justify-content-center">
          <div className="gallery-menu-item col-sm-12 m-2">
            <div className='gallery-image' style={{backgroundImage: `url("/img/three-drinks-with-beans.jpg")`}} />
            <div className='gallery-menu-content'>
              <h3 type="button" onClick={() => setDrinksModalShow(true)}>Drinks</h3>
            </div>
          </div>
          

          <div className="gallery-menu-item col-sm-12 m-2">
            <div className='gallery-image' style={{backgroundImage: `url("/img/Saseme balls.jpg")`}} />
            <div className='gallery-menu-content'>
              <h3 type="button">Snacks</h3>
            </div>
          </div>

          <div className="gallery-menu-item col-sm-12 m-2">
            <div className='gallery-image' style={{backgroundImage: `url("/img/Spicy HP 2.jpg")`}} />
            <div className='gallery-menu-content'>
              <h3 type="button">Entrees</h3>
            </div>
          </div>

          <div className="gallery-menu-item col-sm-12 m-2">
            <div className='gallery-image' style={{backgroundImage: `url("/img/Boba cake.jpg")`}} />
            <div className='gallery-menu-content'>
              <h3 type="button">Desserts</h3>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
   );
}
 
export default Gallery;