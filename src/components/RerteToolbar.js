import React, { PropTypes, Component } from 'react';
import RerteButton from './RerteButton';
import RerteSelectCheck from './RerteSelectCheck';
import RerteSelect from './RerteSelect';
import $ from 'jquery';

let commands = [
	{type: 'bold',display: true},
	{type: 'italic',display: true},
	{type: 'underline',display: true},
	{type: 'strikethrough',display: true},
	{type: 'subscript',display: true},
	{type: 'superscript',display: true},
	{type: 'indent',display: true},
	{type: 'outdent',display: true},
	{type: 'list-ul',display: true},
	{type: 'list-ol',display: true},
	{type: 'align-left',display: true},
	{type: 'align-center',display: true},
	{type: 'align-right',display: true},
	{type: 'align-justify',display: true},
	{type: 'link',display: true},
	{type: 'undo',display: true},
	{type: 'repeat',display: true}
]

export default class RerteToolbar extends Component {
	constructor (props) {
		super(props);
		this.state = {
			commands: commands
		};
		$(document).click(function () {
			$('.SelectTool').css('display', 'none');
		});
	}
	onChangeHandle (type) {
		let commands = this.state.commands;
		let isDisplay;

		commands.forEach(command => {
			if (command.type === type) 
				command.display = !command.display;
		});

		this.setState({
			commands: commands
		});
	}
	onSelectToolToggleClick () {
		if ($('.SelectTool').css('display') === 'none') {
			$('.SelectTool').css('display', 'block');
		} else {
			$('.SelectTool').css('display', 'none');
		}
	}
	render () {
		return (
			<div className="RerteToolbar" >
				<div className="SelectFontFamily SelectBox">
					<RerteSelect options={['Arial', 'Open Sans', 'Sans Serif']} select={"SelectFontFamily"} />
				</div>
				<div className="SelectFontSize SelectBox">
					<RerteSelect options={['Small', 'Normal', 'Large', 'Huge']} select={"SelectFontSize"} />
				</div>
				<div className="DisplayTool">
					{ 
						this.state.commands.map(command => 
							<RerteButton command={command} />
						)
					}
				</div>
				<div className="SelectToolToggle" onClick={this.onSelectToolToggleClick.bind(this)}>
					<ul className="SelectTool">
						{
							this.state.commands.map(command =>
								<RerteSelectCheck command={command} onChangeHandle={this.onChangeHandle.bind(this)}/>
							)
						}
					</ul>
				</div>
			</div>	
		);
	}
}