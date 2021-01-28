import React from 'react';

const Splash = () => {
  return ( 
    <React.Fragment>
    <div className="splash container d-flex justify-content-center">
      <div id="carouselExampleDark" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
        {/* <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="3"></li>
        </ol> */}
        <div className="carousel-inner">

          <div className="carousel-item active" data-bs-interval="3000">
            <img src="/img/four-fruit-drinks.jpeg" className="d-block w-100" alt="" />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Drinks</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div> */}
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src="/img/hotpot1.jpg" className="d-block w-100" alt="..." />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Entrees</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> */}
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src="/img/buns.jpeg" className="d-block w-100" alt="..." />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Snacks</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div> */}
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src="/img/desert1.jpg" className="d-block w-100" alt="..." />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Deserts</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div> */}
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

    <div className="splash-eat d-flex justify-content-center align-items-end">
      <div className="card shadow-lg w-75 h-100">
        <div class="card-body">
          <div className="container">

            <div className="row mt-5">
              <div className="col-4 offset-1">
                <p className="h3">Eat with Us!</p>
                <br />
                <a href="#" className="delivery-btn btn btn-sm btn-primary">Delivery</a>
                <a href="#" className="pickup-btn btn btn-sm btn-primary mx-2">Pick Up</a>
              </div>
              <div className="col-6">
                <img src="/img/boba-svg.jpg" alt="" />
              {/* <a href='https://www.freepik.com/vectors/hand'>Hand vector created by freepik - www.freepik.com</a> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div className="splash-location"></div>
    <div className="splash-team"></div>
    <div className="splash-about"></div>
    <div className="splash-social"></div>
    </React.Fragment>
   );
}
 
export default Splash;