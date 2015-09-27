import React, { PropTypes, Component } from 'react';
import * as actions from '../actions';

export default class RerteButton extends Component {
	constructor (props) {
		super(props);
	}
	onClickHandle () {
		if (this.props.command.display) {
			let ActionsCommand = this.props.command.type.replace(/-/, '_');
			actions[ActionsCommand]();
		}
	}
	render () {

		let iClassName = "fa " + "fa-" + this.props.command.type;
		let bClassName = "RerteButton " + (this.props.command.display ? '' : 'RerteButtonDis');
	
		return (
			<button onClick={this.onClickHandle.bind(this)} className={bClassName}>
				<i className={iClassName}></i>
			</button>		
		);
	}
}