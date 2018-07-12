import React, { Component } from 'react';
import './shameButton.css';
import Scale from './scale'

class ShameButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shameLevel: props.shameLevel
		}
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			shameLevel: nextProps.shameLevel
		});
	}

	render() {
		return (
			<div className={'shame-button' + (this.props.isReset ? ' reset' : '') + (this.props.isShaking ? ' shake' : '')} 
					onClick={this.props.raiseShame}>
				<Scale shameLevel = {this.state.shameLevel}/>
			</div>
		);
	}
}

export default ShameButton;