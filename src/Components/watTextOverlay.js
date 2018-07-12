import React, { Component } from 'react';
import './watTextOverlay.css';

class WatTextOverlay extends Component {
	texts = ['WAT?!', "Aha...", "OMG", "Żenada", "Ja jebe", "CO XD", "XD", "kuźwa", "kurła", "no nieźle", "HA HA"];
	
	constructor(props){
		super(props);
		this.state ={
			textNo: -1,
			textVisible: false,
			textPosition: 0
		}
		this.showText = this.showText.bind(this);
		this.hideText = this.hideText.bind(this);
		this.setText = this.setText.bind(this);
	}

	getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	hideText(){
		this.setState({
			textNo: -1,
			textVisible: false,
			textPosition: 0
		})
	}
	
	setText(){
		this.setState({
			textNo: this.getRandom(0, this.texts.length),
			textVisible: true,
			textPosition: this.getRandom(1, 14)
		});
	}

	showText = function(){
		setTimeout(()=> {
			this.setText();
			setTimeout (() => {
				this.setText();
				setTimeout(() => {
					this.setText();
					setTimeout(() => {
						this.hideText();
					}, 250)
				},250)
			}, 250)
		},250);
	}

	render() {
		return (
			<div className={'wat-text' + (this.state.textVisible ? ' show' : ' hide') + (' text-pos-' + this.state.textPosition)}>
				<div>{this.texts[this.state.textNo]}</div>
			</div>
		);
	}
}

export default WatTextOverlay;