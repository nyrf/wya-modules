import React, { Component } from 'react';
import ModulesEdit from '../Modules/ModulesEdit';

class DiyEdit extends Component {
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
DiyEdit.propTypes = {

};
export default DiyEdit;
