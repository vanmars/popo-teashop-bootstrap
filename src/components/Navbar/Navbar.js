import React from 'react';
import PropTypes from 'prop-types';
import './navbar.scss';

const Navbar = ({setPage}) => {
  return ( 
    <div className="my-navbar sticky-top">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="https://www.doordash.com/store/popo-pullman-637614/en-US" className="nav-delivery-btn btn bg-warning text-black text-nowrap">Order Delivery</a>
          <a href="tel:5093347707" className="nav-pickup-btn btn btn-outline-warning text-nowrap">Order Pickup</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" onClick={() => setPage('splash')} href="/">Home</a>
              <a className="nav-link" onClick={() => setPage('splash')} href="#splash-menu">Menu</a>
              <p className="nav-link pb-0" onClick={() => setPage('gallery')}>Gallery</p>
              <p className="nav-link pb-0" onClick={() => setPage('location')}>Location</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
   );
}

Navbar.propTypes = {
  setPage: PropTypes.func,
}
 
export default Navbar;