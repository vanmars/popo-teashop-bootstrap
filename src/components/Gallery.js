import React, { useState } from 'react';
import GalleryModal from './shared/GalleryModal';
import { Container } from 'react-bootstrap';
import drinkImages from './../images/drinkImages';
import snackImages from './../images/snackImages';
import entreeImages from './../images/entreeImages';
import dessertImages from './../images/dessertImages';

const Gallery = () => {
  const [drinksModalShow, setDrinksModalShow] = useState(false);
  const [snacksModalShow, setSnacksModalShow] = useState(false);
  const [entreesModalShow, setEntreesModalShow] = useState(false);
  const [dessertsModalShow, setDessertsModalShow] = useState(false);

  return ( 
    <div className="gallery">
      <Container>
        {/* Modals */}
        <GalleryModal 
          show={drinksModalShow}
          hide={() => setDrinksModalShow(false)}
          images={drinkImages}
          title="Drinks"
        />
        <GalleryModal 
          show={snacksModalShow}
          hide={() => setSnacksModalShow(false)}
          images={snackImages}
          title="Snacks"
        />
        <GalleryModal 
          show={entreesModalShow}
          hide={() => setEntreesModalShow(false)}
          images={entreeImages}
          title="Entrees"
        />
        <GalleryModal 
          show={dessertsModalShow}
          hide={() => setDessertsModalShow(false)}
          images={dessertImages}
          title="Desserts"
        />
        {/* Header */}
        <div className="gallery-header text-center">
          <h1>Gallery</h1>
        </div>
        <div className="gallery-menu row d-flex justify-content-center">
          {/* Drinks Section */}
          <div className="gallery-menu-item col-sm-12 m-2">
            <div className='gallery-image' style={{backgroundImage: `url("/img/three-drinks-with-beans.jpg")`}} />
            <div className='gallery-menu-content'>
              <h3 type="button" onClick={() => setDrinksModalShow(true)}>Drinks</h3>
            </div>
          </div>
          {/* Snacks Section */}
          <div className="gallery-menu-item col-sm-12 m-2">
            <div className='gallery-image' style={{backgroundImage: `url("/img/Saseme balls.jpg")`}} />
            <div className='gallery-menu-content'>
              <h3 type="button" onClick={() => setSnacksModalShow(true)}>Snacks</h3>
            </div>
          </div>
          {/* Entrees Section */}
          <div className="gallery-menu-item col-sm-12 m-2">
            <div className='gallery-image' style={{backgroundImage: `url("/img/Spicy HP 2.jpg")`}} />
            <div className='gallery-menu-content'>
              <h3 type="button" onClick={() => setEntreesModalShow(true)}>Entrees</h3>
            </div>
          </div>
          {/* Desserts Section */}
          <div className="gallery-menu-item col-sm-12 m-2">
            <div className='gallery-image' style={{backgroundImage: `url("/img/Boba cake.jpg")`}} />
            <div className='gallery-menu-content'>
              <h3 type="button" onClick={() => setDessertsModalShow(true)}>Desserts</h3>
            </div>
          </div>
        </div>
      </Container>
    </div>
   );
}
 
export default Gallery;