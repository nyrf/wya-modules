import React, { Component } from 'react';
import ModulesEdit from '../Modules/ModulesEdit';

class Modules extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<ModulesEdit 
				{...this.props} 
			/>
		);
		
	}
}
Modules.propTypes = {

};
export default Modules;
