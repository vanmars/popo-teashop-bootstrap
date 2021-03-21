import React from 'react';

const Gallery = () => {
  return ( 
    <React.Fragment>
      <div className="gallery container">
        <div className="gallery-header text-center">
          <h1>Gallery</h1>
        </div>

        <div className="gallery-menu row d-flex justify-content-center">

          <div className="gallery-menu-item col-sm-12 m-2">
            <div className='gallery-image' style={{backgroundImage: `url("/img/three-drinks-with-beans.jpg")`}} />
            <div className='gallery-menu-content'>
              <h3>Drinks</h3>
            </div>
          </div>

          <div className="gallery-menu-item col-sm-12 m-2">
            <div className='gallery-image' style={{backgroundImage: `url("/img/Saseme balls.jpg")`}} />
            <div className='gallery-menu-content'>
              <h3>Snacks</h3>
            </div>
          </div>

          <div className="gallery-menu-item col-sm-12 m-2">
            <div className='gallery-image' style={{backgroundImage: `url("/img/Spicy HP 2.jpg")`}} />
            <div className='gallery-menu-content'>
              <h3>Entrees</h3>
            </div>
          </div>

          <div className="gallery-menu-item col-sm-12 m-2">
            <div className='gallery-image' style={{backgroundImage: `url("/img/Boba cake.jpg")`}} />
            <div className='gallery-menu-content'>
              <h3>Desserts</h3>
            </div>
          </div>
          

        </div>
          
        {/* <div className="gallery-drinks">
          
          <div className="row justify-content-center">
            <div id="carouselDrinks" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <img src="/img/four-fruit-drinks.jpeg" className="d-block w-100" alt="" />
                </div>

                <div className="carousel-item">
                  <img src="/img/hotpot1.jpg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/boba.jpeg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/buns.jpeg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/drinks-on-table.jpeg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/desert1.jpg" className="d-block w-100" alt="..." />
                </div>

              </div>
              <a className="carousel-control-prev" href="#carouselDrinks" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselDrinks" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div> 
          </div>
        </div>

        <div className="gallery-entrees">
          <h2>Entrees</h2>
          <div className="row justify-content-center">
            <div id="carouselEntrees" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <img src="/img/four-fruit-drinks.jpeg" className="d-block w-100" alt="" />
                </div>

                <div className="carousel-item">
                  <img src="/img/hotpot1.jpg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/boba.jpeg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/buns.jpeg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/drinks-on-table.jpeg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/desert1.jpg" className="d-block w-100" alt="..." />
                </div>

              </div>
              <a className="carousel-control-prev" href="#carouselEntrees" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselEntrees" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div> 
          </div>
        </div>

        <div className="gallery-sides">
          <h2>Sides</h2>
          <div className="row justify-content-center">
            <div id="carouselSides" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <img src="/img/four-fruit-drinks.jpeg" className="d-block w-100" alt="" />
                </div>

                <div className="carousel-item">
                  <img src="/img/hotpot1.jpg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/boba.jpeg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/buns.jpeg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/drinks-on-table.jpeg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/desert1.jpg" className="d-block w-100" alt="..." />
                </div>

              </div>
              <a className="carousel-control-prev" href="#carouselSides" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselSides" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div> 
          </div>
        </div>

        <div className="gallery-desserts">
          <h2>Desserts</h2>
          <div className="row justify-content-center">
            <div id="carouselDesserts" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <img src="/img/four-fruit-drinks.jpeg" className="d-block w-100" alt="" />
                </div>

                <div className="carousel-item">
                  <img src="/img/hotpot1.jpg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/boba.jpeg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/buns.jpeg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/drinks-on-table.jpeg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="/img/desert1.jpg" className="d-block w-100" alt="..." />
                </div>

              </div>
              <a className="carousel-control-prev" href="#carouselDesserts" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselDesserts" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div> 
          </div>
        </div> */}
        

      </div>
    </React.Fragment>
   );
}
 
export default Gallery;