import React, { PropTypes, Component } from 'react';

import RerteToolbar from './RerteToolbar';
import RerteMain from './RerteMain';
// import $ from 'jquery';

export default class Rerte extends Component {
	constructor (props) {
		super(props);
 	}
	render () {

		return (
			<div className="Rerte">
				<RerteToolbar />
				<RerteMain />
			</div>
		);
	}
}