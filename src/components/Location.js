import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Location = () => {
  return ( 
    <div className="location">

      <div className="location-image"></div>

      <div className="location-content">
        <h1>Location</h1>
        <hr className="mx-auto" style={{color: '#FDB811', width: '75%'}}/>
        <br />
        <br />
      </div>
      
      <div className="drive-thru">
        <h2 data-aos="fade-right">We are open for drive thru and curbside pickup!</h2>
          <Row md={1} lg={3} className="justify-content-center pb-5">
            <Col>
              <img src="/img/curbside-pickup.jpeg" alt=""/>
            </Col>
            <Col>
              <img src="/img/drive-thru-window-with-car.jpeg" alt=""/>
            </Col>
            <Col>
              <img src="/img/drive-thru.jpeg" alt=""/>
            </Col>
          </Row>
          <h3 className="text-right" data-aos="fade-right">Order delivery with <a href="https://www.doordash.com/store/popo-pullman-637614">DoorDash</a>.</h3>
      </div>

      <div className="location-image"></div>

      <div className="inside-store text-center">
        <h2 data-aos="fade-right">We can't wait to dine with you soon!</h2>
          <Row md={1} lg={3}>
            <Col>
              <img src="/img/cash-register-with-bar.jpeg" alt=""/>
            </Col>
            <Col>
              <img src="/img/frontdoor-from-inside.jpeg" alt=""/>
            </Col>
            <Col>
              <img src="/img/boardgames-with-drinks.jpeg" alt=""/>
            </Col>
          </Row>
          <Row  md={1} lg={3}>
            <Col>
              <img src="/img/inside-store-2.jpeg" alt=""/>
            </Col>
            <Col>
              <img src="/img/inside-store-3.jpeg" alt=""/>
            </Col>
            <Col>
              <img src="/img/inside-store-4.jpeg" alt=""/>
            </Col>
          </Row>
      </div>

      <div className="location-image"></div>
    </div>
   );
}
 
export default Location;