import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/register';
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
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: true,
				mode: 'repulse'
			}
		}
	}
};

class App extends Component {
	constructor() {
		super();

		this.state = {
			input: '',
			imageUrl: '',
			box: {},
      route: 'signin',
      isSignedIn: false
		};
	}

	calculateFaceLocation = (data) => {
		// eslint-disable-next-line
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputImage');
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height
		};
	};

	displayFaceBox = (box) => {
		console.log(box);
		this.setState({ box: box });
	};

	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	};

	onButtonSubmit = () => {
		this.setState({ imageUrl: this.state.input });
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
			.then((response) => this.displayFaceBox(this.calculateFaceLocation(response)))
			.catch((err) => console.log(err));
	};

	onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }

		this.setState({ route: route });
	};

	render() {
    const { isSignedIn, imageUrl, route, box } = this.state;

		return (
			<div className="App">
				<Particles className="particles" params={particleOptions} />
				<Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
				{route === 'home' ? 
					<div>
						<Logo />
						<Rank />
						<ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
						<FaceRecognition box={box} imageUrl={imageUrl} />
					</div>
        : (route === 'signin'
            ? <Signin onRouteChange={this.onRouteChange} />
					  : <Register onRouteChange={this.onRouteChange} />
          )
        }
			</div>
		);
	}
}

export default App;
