import React from 'react';

const Alert = ({setPage}) => {
  return ( 
    <div className="alert d-flex justify-content-center align-items-center p-0 m-0">
      <p className= 'alert-link fw-normal m-0 p-2' onClick={() => setPage('updates')}>Caring for Our Community: COVID Response</p>
    </div>
   );
}
 
export default Alert;