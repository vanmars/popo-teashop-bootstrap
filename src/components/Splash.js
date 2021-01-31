import React from 'react';
import Header from './shared/Header';

const Splash = () => {
  return ( 
    <React.Fragment>
      <Header />
      <div className="splash-eat d-flex justify-content-center">
        <div class="card shadow-lg">
          <img src="/img/storefront.jpeg" class="card-img-top" alt="" />
          <div class="card-body text-center">
            <h1><em>Come eat with us!</em></h1>
            <br />
            <p>405 SE Bishop Blvd Ste #3</p>
            <p>Pullman, WA 99163</p>
            <a href="#">Hours</a>
            <br />
          </div>
        </div>
      </div>



      <div className="splash-menu">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
        </div>
      </div>

      <div className="splash-team"></div>
      <div className="splash-about"></div>
      <div className="splash-social"></div>
    </React.Fragment>
   );
}
 
export default Splash;