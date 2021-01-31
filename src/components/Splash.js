import React from 'react';
import Header from './shared/Header';

const Splash = () => {
  return ( 
    <React.Fragment>
      <Header />
      <div className="splash-eat d-flex justify-content-center">
        <div className="card shadow-lg">
          <img src="/img/storefront.jpeg" className="card-img-top" alt="" />
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h1><em>Come eat with us!</em></h1>
            <br />
            <p>405 SE Bishop Blvd Ste #3</p>
            <p>Pullman, WA 99163</p>
            <a href="#">Hours</a>
            <br />
          </div>
        </div>
      </div>



      <div className="splash-menu d-flex flex-column align-items-center">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="pills-drink-tab" data-bs-toggle="pill" href="#pills-food" role="tab" aria-controls="pills-food" aria-selected="true">Drink Menu</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-food-tab" data-bs-toggle="pill" href="#pills-food" role="tab" aria-controls="pills-food" aria-selected="false">Food Menu</a>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-drink" role="tabpanel" aria-labelledby="pills-drink-tab">
            <img src="/img/menu1.jpg" alt="" />
          </div>
          <div className="tab-pane fade" id="pills-food" role="tabpanel" aria-labelledby="pills-food-tab">
          <img src="/img/menu2.jpg" alt="" />
          </div>
        </div>
      </div>



      <div className="splash-team"></div>
      <div className="splash-about"></div>
      <div className="splash-social"></div>
    </React.Fragment>
   );
}
 
export default Splash;