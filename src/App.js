import React, { useState} from 'react';

import Alert from './components/shared/Alert';
import Navbar from './components/shared/Navbar';
import Splash from './components/Splash';
import Eat from './components/Eat';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Team from './components/Team';
import Updates from './components/Updates';
import Footer from './components/shared/Footer';

function App() {
  const [page, setPage] = useState('splash');
  let currentlyVisiblePage = null;

  switch(page) {
    case 'splash': 
      currentlyVisiblePage = <Splash />;
      break;
    case 'menu':
      currentlyVisiblePage = <Eat />;
      break;
    case 'gallery':
      currentlyVisiblePage = <Gallery />;
      break;
    case 'location':
      currentlyVisiblePage = <Location />;
      break;
    case 'team':
      currentlyVisiblePage = <Team />;
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
        page={page}
        setPage={setPage}
      />
      {currentlyVisiblePage}
      <Footer />
    </div>
  );
}

export default App;
