import React from 'react';

const Gallery = () => {
  return ( 
    <React.Fragment>
      <div className="gallery">
        <h1>Gallery</h1>

        <h2>Drinks</h2>
        <div className="gallery-drinks">
          <div id="carouselDrinksIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselDrinksIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselDrinksIndicators" data-slide-to="1"></li>
              <li data-target="#carouselDrinksIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner-drinks">
              <div className="carousel-item active">
                <img className="d-block w-100" src="/img/array-of-eight-drinks.jpeg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="/img/boba-bush-background.jpeg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="/img/boba.jpeg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselDrinksIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselDrinksIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>


        <h2 className='mt-5'>Entrees</h2>
        {/* <div classNameName="gallery-entrees">
        <div id="carouselExampleIndicatorsEntrees" class="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicatorsEntrees" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicatorsEntrees" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicatorsEntrees" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="/img/balls.jpeg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicatorsEntrees" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicatorsEntrees" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div> */}


        <h2 className='mt-5'>Sides</h2>
        {/* <div className="gallery-sides">
        <div id="carouselSidesIndicators" class="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselSidesIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselSidesIndicators" data-slide-to="1"></li>
                <li data-target="#carouselSidesIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="/img/Boba cake.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="..." alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="..." alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselSidesIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselSidesIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
 */}

        <h2 className='mt-5'>Desserts</h2>
        {/* <div className="gallery-desserts">
        <div id="carouselDessertsIndicators" class="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselDessertsIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselDessertsIndicators" data-slide-to="1"></li>
              <li data-target="#carouselDessertsIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="/img/Boba cake.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="..." alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="..." alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselDessertsIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselDessertsIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div> */}


      </div>
    </React.Fragment>
   );
}
 
export default Gallery;