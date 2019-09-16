import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'; 

import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
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
      input: '',
      imageUrl: '',
      box: {}
    }
  } 

  calculateFaceLocation = (data) => {
    // eslint-disable-next-line
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage ');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);

  }

  onInputChange = event => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, this.state.input
        )
      .then(response => this.calculateFaceLocation(response))
      .catch(err => console.log(err))
    }

  

  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={ particleOptions } />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={ this.onInputChange } onButtonSubmit={ this.onButtonSubmit }/>
        <FaceRecognition imageUrl={ this.state.imageUrl } />
      </div>
    );
  }

}

export default App;