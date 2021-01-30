import React from 'react';

const Navbar = () => {
  return ( 
    <div className="my-navbar">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
              <a className="nav-link" aria-current="page"  href="/">Home</a>
              <a className="nav-link" href="/eat">Eat</a>
              <a className="nav-link" href="/gallery">Gallery</a>
              <a className="nav-link" href="/location">Location</a>
              <a className="nav-link" href="/team">Team</a>
              <a className="nav-link" href="/about">About</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
   );
}
 
export default Navbar;