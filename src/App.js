import React, { useState} from 'react';

import Alert from './components/Alert/Alert';
import Navbar from './components/Navbar/Navbar';
import Splash from './pages/Splash/Splash';
import Gallery from './pages/Gallery/Gallery';
import Location from './pages/Location/Location';
import Updates from './pages/Updates/Updates';
import Footer from './components/Footer/Footer';

function App() {
  const [page, setPage] = useState('splash');
  let currentlyVisiblePage = null;

  switch(page) {
    case 'splash' || 'menu': 
      currentlyVisiblePage = <Splash />;
      break;
    case 'gallery':
      currentlyVisiblePage = <Gallery />;
      break;
    case 'location':
      currentlyVisiblePage = <Location />;
      break;
    case 'updates':
      currentlyVisiblePage = <Updates />;
      break;
    default:
      currentlyVisiblePage = <Splash />;
  }

  return (
    <div className="App">
      <Alert 
        setPage={setPage}
      />
      <Navbar 
        setPage={setPage}
      />
      {currentlyVisiblePage}
      <Footer />
    </div>
  );
}

export default App;