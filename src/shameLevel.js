import React, { Component } from 'react';
import './shameLevel.css';

class ShameLevel extends Component {
	constructor(props){
		super(props);
		this.state = {
			shameLevel: props.shameLevel
		};
		this.shameLvlRef = React.createRef();
	}

	componentDidUpdate(){
		this.setShameLevel(this.props.shameLevel);
	}

	setShameLevel = function(shameLevel){
		this.shameLvlRef.current.style.height = shameLevel + "vh";
	}

	render() {
		return (
			<div className="shame-level" ref={this.shameLvlRef}>
			</div>
		)
	}
}

export default ShameLevel;
