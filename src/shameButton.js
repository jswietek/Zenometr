import React, { Component } from 'react';
import './shameButton.css';


class ShameButton extends Component {
	constructor(props){
		super(props);
		
		this.shameButtonRef = React.createRef();
	}

	componentDidUpdate(){
		this.shameButtonRef.current.style.top = this.props.buttonTop;
	}

	
	render() {
		return (
			<div className={'shame-button' + (this.props.isReset ? ' reset' : '') + (this.props.isShaking ? ' shake' : '')} onClick={this.props.raiseShame} ref={this.shameButtonRef}>
				<div className='shame-button-content'>
					{this.props.isReset ? (<i class="fas fa-redo"></i>) : 'SHAME!' }
				</div>
			</div>
		);
	}
}
export default ShameButton;