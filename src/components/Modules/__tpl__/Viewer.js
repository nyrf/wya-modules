import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Viewer extends Component {
	render() {
		const { item, itemData } = this.props;
		return (
			<div>{item}</div>
		);
	}
}


export default Viewer;

