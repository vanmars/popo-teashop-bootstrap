import React from 'react';
import { Link } from 'react-router-dom';

const Alert = () => {
  return ( 
    <div className="alert text-center p-1">
      <Link 
        to='/updates'
        className= 'alert-link text-decoration-none fw-light fs-6'
      >
        COVID Response
      </Link>
    </div>
   );
}
 
export default Alert;