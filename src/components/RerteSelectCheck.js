import React, { PropTypes, Component } from 'react';

export default class RerteSelectCheck extends Component {
	constructor (props) {
		super(props);
	}
	onChangeHandle () {
		this.props.onChangeHandle(this.props.command.type);
	}
	render () {

		let className = "fa " + "fa-" + this.props.command.type;
		return (
			<div className="RerteSelectCheck">
				<input id={this.props.command.type} type="checkbox" checked={this.props.command.display} onChange={this.onChangeHandle.bind(this)} />
				<label htmlFor={this.props.command.type}><i className={className}></i></label>
			</div>
		);
	}
}