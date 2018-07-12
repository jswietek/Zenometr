import React, { Component } from 'react';
import './scale.css';

class Scale extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mercuryHeight: '20%'
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log('next props');
		var height = (20 + (nextProps.shameLevel * 0.8)) + '%';
		this.setState({
			mercuryHeight: height
		});
	}

	render() {
		return (
			<div id="thermometer">
				<div id="stem" />
				<div id="merc-stem">
					<div id="mercury" style={{height: this.state.mercuryHeight}} />
				</div>
				<div id="bulb" />
			</div>
		)
	}
}

export default Scale;