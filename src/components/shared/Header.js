import React from 'react';


const Header = () => {
  return ( 
    <React.Fragment>
      <div className="header">

        <div className="row justify-content-center">
          <img id="header-logo" src="/img/popo_logo.png" alt="popo logo" />
        </div>

        <div className="row justify-content-center">
          <div id="carouselExampleDark" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">

              <div className="carousel-item active" data-bs-interval="3000">
                <img src="/img/four-fruit-drinks.jpeg" className="d-block w-100" alt="" />
              </div>

              <div className="carousel-item" data-bs-interval="3000">
                <img src="/img/hotpot1.jpg" className="d-block w-100" alt="..." />
              </div>

              <div className="carousel-item" data-bs-interval="3000">
                <img src="/img/boba.jpeg" className="d-block w-100" alt="..." />
              </div>

              <div className="carousel-item" data-bs-interval="3000">
                <img src="/img/buns.jpeg" className="d-block w-100" alt="..." />
              </div>

              <div className="carousel-item" data-bs-interval="3000">
                <img src="/img/drinks-on-table.jpeg" className="d-block w-100" alt="..." />
              </div>

              <div className="carousel-item" data-bs-interval="3000">
                <img src="/img/desert1.jpg" className="d-block w-100" alt="..." />
              </div>

            </div>
            <a className="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div> 
        </div>
      </div>
    </React.Fragment>
   );
}
 
export default Header;