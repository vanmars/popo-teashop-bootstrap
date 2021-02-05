import React, { useState, useEffect } from 'react';
import Header from './shared/Header';

const Splash = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  const makeInstaApiCall = () => {
    fetch(``)
      .then(response => response.json())
      .then(data => {
        setIsLoaded(true);
        setPosts(data.results);  // or however you parse the response
      })
      .catch(err => {
        setIsLoaded(true);
        setError(err);
      })
  }

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
      <div className="splash-menu d-flex flex-column align-items-center" id="splash-menu">
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
            <img src="/img/menu2.jpg" alt="" />
          </div>
          <div className="tab-pane fade" id="pills-food" role="tabpanel" aria-labelledby="pills-food-tab">
          <img src="/img/menu1.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="splash-about d-flex justify-content-center align-items-center">
        <div className="card p-3 text-center">
        <p>POPO is a local business that aims to bring amazing Asian flavors to the Palouse and create a great atmosphere for people to relax and hang out with their friends!</p>
        </div>
      </div>
      <div className="splash-team d-flex flex-column align-items-center my-4">
        <div className="hiring-banner">
          <img src="/img/hiring-banner.png" alt=""/>
        </div>
        <hr />
        <div className="hiring-text text-center my-3 p-3">
          <h4>PART-TIME POSITIONS</h4>
          <ul>
            <li>Flexible hours!</li>
            <li>Learn to cook dishes!</li>
            <li>Great job for college students!</li>
            <li>Add customer service skills to your resume!</li>
          </ul>
        </div>
        <hr />
        <div className="hiring-text text-center my-3 p-3">
          <p>We are looking for <span>FRIENDLY PEOPLE</span> who are willing to <span>WORK HARD</span> and enjoy being part of a <span>
          TEAM!</span></p>
          <br />
          <button href="emailto:popohiring@gamil.com" className="btn bg-warning">Now accepting resumes at popohiring@gmail.com!</button>
        </div>
      </div>

      <div className="splash-social">

      </div>


    </React.Fragment>
   );
}
 
export default Splash;