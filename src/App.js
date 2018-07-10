import React, { Component } from 'react';
import './App.css';
import ShameButton from './shameButton'
import ShameLevel from './shameLevel'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shameLevel: 0,
			buttonTop: '50%',
			isReset: false
		}
		this.imgFace = React.createRef();
	}

	raiseShame = function () {
		var incShameLevel = this.increaseShameLevel();
		this.setState({
			shameLevel: incShameLevel,
			buttonTop: incShameLevel < 100 ? '50%' : '80%',
			isReset: incShameLevel == 100
		})
		if (incShameLevel === 100) {
			setTimeout(() => this.showGif(), 200);
		}
		else if (incShameLevel === 0) {
			setTimeout(() => this.hideGif(), 100);
		}
	}

	increaseShameLevel = function () {
		if (this.state.shameLevel < 100) {
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
			<div className="App">
				<ShameLevel shameLevel={this.state.shameLevel} />
				<img ref={this.imgFace} src={require('./facepalm.gif')} className="facepalm" />
				<ShameButton raiseShame={() => this.raiseShame()} buttonTop={this.state.buttonTop} isReset={this.state.isReset} />
			</div>
		);
	}
}

export default App;
