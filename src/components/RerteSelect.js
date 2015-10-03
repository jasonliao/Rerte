import React, { PropTypes, Component } from 'react';
import $ from 'jquery';
import * as actions from '../actions';

export default class RerteSelect extends Component {
	constructor (props) {
		super(props);
		this.state = {
			option: this.props.options[1]
		};
	}
	handleInputClick () {
		let ul = $("." + this.props.select).find('ul');
		if (ul.css('display') === 'none') {
			ul.css('display', 'block');
		} else {
			ul.css('display', 'none');
		}
	}
	handItemClick (e) {
		this.setState({
			option: e.target.innerHTML
		});
		if (this.props.select == 'SelectFontFamily') {
			actions.change_fontName(e.target.innerHTML);
		} else {
			actions.change_fontSize(e.target.innerHTML);
		}
	}
	render () {
		return (
			<div onClick={this.handleInputClick.bind(this)}>
				<button>{this.state.option}</button>
				<ul>
					{
						this.props.options.map(option => 
							<button onClick={this.handItemClick.bind(this)}>{option}</button>
						)
					}
				</ul>
			</div>
		);
	}
}
