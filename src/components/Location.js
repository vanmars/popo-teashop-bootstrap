import React from 'react';

const Location = () => {
  return ( 
    <div className="location">
      <h1>Location</h1>
      <hr className="mx-auto" style={{color: '#FDB811', width: '75%'}}/>
      <br />
      <br />

      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-3 offset-md-2">
          <img id="img-1" src="/img/storefront.jpeg" alt=""/> 
        </div>

        <div className="col-sm-12 col-md-5 offset-md-2 offset-lg-1">
          <h2 className="text-white" style={{fontWeight: '200'}}>Dine with Us!</h2>
          <h4 style={{fontWeight: '400'}}>405 SE Bishop Blvd Ste #3</h4>
          <h4 style={{fontWeight: '400'}}>Pullman, WA 99163</h4>
          <p className="text-white">12:00 PM - 9:00 PM</p>
        </div>
      </div>

      <br />
      <hr className="mx-auto" style={{color: '#FDB811', width: '75%'}}/>
      <br />

      <div className="row d-flex justify-content-center align-items-center p-5">
        <h4 className='col col-sm-12'>We are open for drive thru and curbside pickup!</h4>
        <br />
        <img className='col col-sm-12' id="img-10"  src="/img/curbside-pickup.jpeg" alt=""/>
        <img className='col col-sm-12' id="img-11"  src="/img/drive-thru-window-with-car.jpeg" alt=""/>
        <img className='col col-sm-12' id="img-12"  src="/img/drive-thru.jpeg" alt=""/>
      </div>

      <br />
      <hr className="mx-auto" style={{color: '#FDB811', width: '75%'}}/>
      <br />

      <div className="inside container">
        <img id="img-2"  src="/img/cash-register-with-bar.jpeg" alt=""/>
        <img id="img-3"  src="frontdoor-from-inside.jpeg" alt=""/>
        <img id="img-4"  src="/img/boardgames-with-drinks.jpeg" alt=""/>
        <img id="img-5"  src="/img/inside-store-1.jpeg" alt=""/>
        <img id="img-6"  src="/img/inside-store-2.jpeg" alt=""/>
        <img id="img-7"  src="/img/inside-store-3.jpeg" alt=""/>
        <img id="img-8"  src="/img/inside-store-4.jpeg" alt=""/>
      </div>

      <br />
      <hr className="mx-auto" style={{color: '#FDB811', width: '75%'}}/>
      <br />

      <div className="news">
        <div className="row d-flex justify-content-center align-items-center">
         <div className="col-sm-12 col-md-6">
            <h4><a 
              href="https://coronaviruscampusnews.com/restaurant-embraces-social-distancing-to-promote-health/"
              className="news-link"
            >
              Check POPO out in the News!
            </a></h4>
          </div>
          <div className="col-sm-12 col-md-6">
          <img id="img-13"  src="/img/news-article.jpeg" alt=""/>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Location;