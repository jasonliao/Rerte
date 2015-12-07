import React, { PropTypes, Component } from 'react';

import RerteToolbar from './RerteToolbar';
import RerteMain from './RerteMain';

import './../styles/index.css';
import './../../node_modules/font-awesome/css/font-awesome.min.css';

export default class Rerte extends Component {
	constructor (props) {
		super(props);
 	}
	render () {
		return (
			<div className="Rerte" >
				<RerteToolbar />
				<RerteMain />
			</div>
		);
	}
}