import React, { useState, useEffect } from 'react';
import Header from './shared/Header';
import InstagramEmbed from 'react-instagram-embed';
import { Container, Row, Col } from 'react-bootstrap';

const Splash = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  const makeInstagramApiCall = () => {
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

      {/* Dine with Us */}
      <div className="splash-eat d-flex justify-content-center">
        <div className="card shadow-lg">
          <img src="/img/storefront.jpeg" className="card-img-top" alt="" />
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h1><em>Come eat with us!</em></h1>
            <br />
            <p>405 SE Bishop Blvd Ste #3</p>
            <p>Pullman, WA 99163</p>
            <a href="/">12:00 PM - 9:00 PM</a>
            <br />
          </div>
        </div>
      </div>

      {/* Menu */}
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
      
      {/* About */}
      <div className="splash-about d-flex justify-content-center align-items-center">
        <div className="card p-3 text-center">
        <p>POPO is a local business that aims to bring amazing Asian flavors to the Palouse and create a great atmosphere for people to relax and hang out with their friends!</p>
        </div>
      </div>

    {/* Hiring */}
      <div id="splash-team" className="splash-team d-flex flex-column align-items-center">
        <div className="hiring-banner">
          <img src="/img/hiring-banner.png" alt=""/>
        </div>
        <hr />
        <div className="hiring-text text-center pt-5 pb-5">
          <h4>PART-TIME POSITIONS</h4>
          <ul>
            <li>Flexible hours!</li>
            <li>Learn to cook dishes!</li>
            <li>Great job for college students!</li>
            <li>Add customer service skills to your resume!</li>
          </ul>
        </div>
        <div className="hiring-text text-center p-5">
          <p>We are looking for <span>FRIENDLY PEOPLE</span> who are willing to <span>WORK HARD</span> and enjoy being part of a <span>
          TEAM!</span></p>
          <br />
          <button href="emailto:popohiring@gamil.com" className="btn bg-warning">Now accepting resumes at popohiring@gmail.com!</button>
        </div>
      </div>

      {/* News */}
      <div className="splash-news">
        <Container>
          <Row className="justify-content-around align-items-center">
            <Col md={12} lg={6}>
              <h2>Check out POPO in the <a 
                href="https://coronaviruscampusnews.com/restaurant-embraces-social-distancing-to-promote-health/"
                className="news-link"
              >
                News!
              </a></h2>
            </Col>
            <Col md={12} lg={4} className="text-right">
              <img src="/img/news-article.jpeg" alt=""/>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Instagram Wall */}
      <div className="splash-social d-flex justify-content-center align-items-center">
        <h1 className="text-center"><em>Instagram Wall Coming Soon!</em></h1>
        <InstagramEmbed
          url='https://www.instagram.com/p/CKMjiqrJcqt/'
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    </React.Fragment>
   );
}
 
export default Splash;