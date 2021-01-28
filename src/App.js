import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Alert from './components/shared/Alert';
import Header from './components/shared/Header';
import Navbar from './components/shared/Navbar';
import Splash from './components/Splash';
import Eat from './components/Eat';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Team from './components/Team';
import About from './components/About';
import Updates from './components/Updates';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Alert />
        <Header />
        
        <Switch>
          <Route exact path="/" component={() => <Splash /> } />
          <Route exact path="/eat" component={() => <Eat /> } />
          <Route exact path="/gallery" component={() => <Gallery /> } />
          <Route exact path="/location" component={() => <Location /> } />
          <Route exact path="/team" component={() => <Team /> } />
          <Route exact path="/about" component={() => <About /> } />
          <Route exact path="/updates" component={() => <Updates /> } />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
