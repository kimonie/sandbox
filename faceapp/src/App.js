import React, { Component } from 'react';
import Particles from 'react-particles-js';

import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import Rank from './components/Rank/rank';

import 'tachyons';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={ particleOptions } />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        

      {/* // 
      // 
      // <FaceRegognition /> */}

      </div>
     
    );
  }

}

export default App;
