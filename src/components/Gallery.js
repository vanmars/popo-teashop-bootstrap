import React, { useState } from 'react';
import GalleryModal from './shared/GalleryModal';
import { Container } from 'react-bootstrap';

const Gallery = () => {
  const [drinksModalShow, setDrinksModalShow] = useState(false);
  const [snacksModalShow, setSnacksModalShow] = useState(false);
  const [entreesModalShow, setEntreesModalShow] = useState(false);
  const [dessertsModalShow, setDessertsModalShow] = useState(false);

  return ( 
    <React.Fragment>
      <Container className="gallery">
        {/* Modals */}
        <GalleryModal 
          show={drinksModalShow}
          hide={() => setDrinksModalShow(false)}
          images={[
            {
              src: "/img/four-fruit-drinks-750x550.jpeg",
              caption: "Fruit Drinks",
              subCaption: ""
            },
            {
              src: "/img/boba-750x550.jpeg",
              caption: "Boba",
              subCaption: ""
            },
            {
              src: "/img/drinks-on-table-750x550.jpeg",
              caption: "Drinks on Table",
              subCaption: ""
            },
            {
              src: "/img/array-of-eight-drinks-750x550.jpeg",
              caption: "Fall Drinks",
              subCaption: ""
            },
            {
              src: "/img/boba-bush-background-750x550.jpeg",
              caption: "",
              subCaption: ""
            },
            {
              src: "/img/brown-drink-yellow-background-750x550.jpeg",
              caption: "",
              subCaption: ""
            },
            {
              src: "/img/drinks-fuity-table-750x550.jpeg",
              caption: "Summer Drinks",
              subCaption: ""
            },
            {
              src: "/img/drinks-on-table-2-750x550.jpeg",
              caption: "",
              subCaption: ""
            },
            {
              src: "/img/green-drink-yellow-background-750x550.jpeg",
              caption: "Specialty Drink",
              subCaption: ""
            },
            {
              src: "/img/his-and-hers-drinks-750x550.jpeg",
              caption: "His and Hers Drinks",
              subCaption: ""
            },
            {
              src: "/img/pineapple-tea-750x550.jpeg",
              caption: "Pineapple Tea",
              subCaption: ""
            },
            {
              src: "/img/pink-drink-against-bricks-750x550.jpeg",
              caption: "Specialy Drink",
              subCaption: ""
            },
            {
              src: "/img/pink-sprinkles-chocolate-drink-750x550.jpeg",
              caption: "Chocolate Sprinkles Drink",
              subCaption: ""
            },
            {
              src: "/img/pink-tea-with-lemon-750x550.jpeg",
              caption: "Pink Tea with Lemon",
              subCaption: ""
            },
            {
              src: "/img/three-brigh-drinks-outside-750x550.jpg",
              caption: "Fruit Drinks",
              subCaption: ""
            }
          ]}
          title="Drinks"
        />
        <GalleryModal 
          show={snacksModalShow}
          hide={() => setSnacksModalShow(false)}
          images={[
            {
              src: "/img/balls-750x550.jpeg",
              caption: "Sesame Balls",
              subCaption: ""
            },
            {
              src: "/img/buns-750x550.jpeg",
              caption: "Buns",
              subCaption: ""
            },
            {
              src: "/img/calamari-750x550.jpeg",
              caption: "Fried Calamari",
              subCaption: ""
            },
            {
              src: "/img/chicken-wooden-table-750x550.jpeg",
              caption: "Fried Chicken",
              subCaption: ""
            },
            {
              src: "/img/fried-bbq-porkbuns-750x550.jpeg",
              caption: "Fried BBQ Pork Buns",
              subCaption: ""
            },
            {
              src: "/img/fries-750x550.jpeg",
              caption: "Fries",
              subCaption: ""
            },
            {
              src: "/img/Fryed milk buns-750x550.jpg",
              caption: "Fried Milk Buns",
              subCaption: ""
            },
            {
              src: "/img/potstickers-750x550.jpeg",
              caption: "Potstickers",
              subCaption: ""
            },
            {
              src: "/img/Saseme balls-750x550.jpg",
              caption: "Seasame Balls",
              subCaption: ""
            },
            {
              src: "/img/snack-bookcase-750x550.jpeg",
              caption: "Snack Wall",
              subCaption: ""
            },
            {
              src: "/img/snack-case-closeup-750x550.jpg",
              caption: "Snack Wall",
              subCaption: ""
            },
            {
              src: "/img/Steamed buns-750x550.jpg",
              caption: "Steamed Buns",
              subCaption: ""
            }
          ]}
          title="Snacks"
        />
        <GalleryModal 
          show={entreesModalShow}
          hide={() => setEntreesModalShow(false)}
          images={[
            {
              src: "/img/hotpot1-750x550.jpg",
              caption: "Hot Pot",
              subCaption: ""
            },
            {
              src: "/img/curry-hp-750x550.jpg",
              caption: "Curry Hot Pot",
              subCaption: ""
            },
            {
              src: "/img/Original HP-750x550.jpg",
              caption: "Original Hot Pot",
              subCaption: ""
            },
            {
              src: "/img/Sour Pickel HP 2-750x550.jpg",
              caption: "Sour Pickel Hot Pot",
              subCaption: ""
            },
            {
              src: "/img/Spicy HP 2-750x550.jpg",
              caption: "Spicy Hot Pot",
              subCaption: ""
            },
            {
              src: "/img/Tomato HP-750x550.jpg",
              caption: "Tomato Hot Pot",
              subCaption: ""
            }
          ]}
          title="Entrees"
        />
        <GalleryModal 
          show={dessertsModalShow}
          hide={() => setDessertsModalShow(false)}
          images={[
            {
              src: "/img/Boba cake-750x550.jpg",
              caption: "Boba Cake",
              subCaption: ""
            },
            {
              src: "/img/desert1-750x550.jpg",
              caption: "Boba Cake",
              subCaption: ""
            }
          ]}
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
    </React.Fragment>
   );
}
 
export default Gallery;