import React from 'react';
import { Link } from 'react-router-dom';

const Alert = () => {
  return ( 
    <div className="alert text-center p-0 m-0">
      <Link 
        to='/updates'
        className= 'alert-link fw-light'
      >
        COVID Response
      </Link>
    </div>
   );
}
 
export default Alert;