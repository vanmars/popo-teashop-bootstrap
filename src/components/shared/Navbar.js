import React from 'react';

const Navbar = () => {
  return ( 
    <div className="my-navbar sticky-top">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="https://www.doordash.com/store/popo-pullman-637614/en-US" className="nav-delivery-btn btn bg-warning text-black text-nowrap">Order Delivery</a>
          <a hhref="tel:5093347707" className="nav-pickup-btn btn btn-outline-warning text-nowrap">Order Pickup</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/eat">Menu</a>
              <a className="nav-link" href="/gallery">Gallery</a>
              <a className="nav-link" href="/location">Location</a>
              <a className="nav-link" href="/team">Team</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
   );
}
 
export default Navbar;