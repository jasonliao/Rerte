import React, { PropTypes, Component } from 'react';
import $ from 'jquery';

export default class RerteSelect extends Component {
	constructor (props) {
		super(props);
		this.state = {
			option: this.props.options[0]
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
	render () {
		return (
			<div onClick={this.handleInputClick.bind(this)}>
				<input type='text' value={this.state.option} readonly/>
				<ul>
					{
						this.props.options.map(option => 
							<li>{option}</li>
						)
					}
				</ul>
			</div>
		);
	}
}
