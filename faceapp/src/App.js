import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'; 

import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import Rank from './components/Rank/rank';

import 'tachyons';
import './App.css';

const app = new Clarifai.App({
  apiKey: '2e36ec97d9604372b94ffa380c4c2eba'
 });

const particleOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 700
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
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
    app.models
      .predict(
        "a403429f2ddf4b49b307e318f00e528b", 
        "https://samples.clarifai.com/face-det.jpg"
        )
      .then(
        function(response) {
          console.log(response);
        },
        function(err) {
          
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
