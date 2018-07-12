import React, { Component } from 'react';
import './App.css';
import ShameButton from './shameButton'
import WatTextOverlay from './watTextOverlay'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shameLevel: 0,
			isReset: false
		}
		this.imgFace = React.createRef();
		this.button = React.createRef();
		this.wat = React.createRef();
	}


	raiseShame = function () {
		var incShameLevel = this.increaseShameLevel();
		this.setState({
			shameLevel: incShameLevel,
			isReset: incShameLevel === 100,
			isShaking: true
		})
		if (incShameLevel === 100) {
			setTimeout(() => this.showGif(), 200);
		}
		else if (incShameLevel === 0) {
			setTimeout(() => this.hideGif(), 100);
		}
		setTimeout(()=>{
			this.setState(prevState => ({
				...prevState,
				isShaking: false
			}))
		}, 500)
	}

	increaseShameLevel = function () {
		if (this.state.shameLevel < 100) {
			var audio = document.getElementById("audio");
			audio.play();
			this.wat.current.showText();
			return this.state.shameLevel + 10;
		}
		else {
			return 0;
		}
	}

	showGif = function () {
		this.imgFace.current.style.display = 'block';
	}

	hideGif = function () {
		this.imgFace.current.style.display = 'none';
	}

	render() {
		return (
			<div className="App" id="shame-app">
				<WatTextOverlay ref={this.wat}/>
				<audio id="audio" src="http://ankaikuba.nazwa.pl/sounds/sound1.mp3" ></audio>
				<ShameButton isShaking={this.state.isShaking} raiseShame={() => this.raiseShame()} buttonTop={this.state.buttonTop} 
					isReset={this.state.isReset} shameLevel={this.state.shameLevel}/>
					<img ref={this.imgFace} src={require('../facepalm.gif')} className="facepalm" />
			</div>
		);
	}
}

export default App;
