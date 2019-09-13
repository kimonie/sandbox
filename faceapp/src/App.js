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
  constructor() {
    super();

    this.state = {
      input: ''
    }
  }

  onInputChange = event => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('click')
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        // do something with response
      },
      function(err) {
        // there was an error
      }
    );
  }

  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={ particleOptions } />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={ this.onInputChange } onButtonSubmit={ this.onButtonSubmit }/>
        

      {/* <FaceRegognition /> */}

      </div>
     
    );
  }

}

export default App;
