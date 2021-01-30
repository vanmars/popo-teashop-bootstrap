import React from 'react';
import Header from './shared/Header';

const Splash = () => {
  return ( 
    <React.Fragment>
      <Header />
      {/* <div className="splash container d-flex justify-content-center"></div> */}
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
                  {/* <img src="/img/boba-svg.jpg" alt="" /> */}
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