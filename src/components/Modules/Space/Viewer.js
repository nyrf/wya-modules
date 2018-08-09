import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
class Space extends PureComponent {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const {
			item,
			itemData,
			styleObj
		} = this.props;
		const {
			m_tb
		} = itemData || {};
		return (
			<div 
				className="wya-me-modules _pe-none wya-mem-space" 
				style={{ margin: `${m_tb}px 0`, ...styleObj }} 
			/>
		);
	}
}
Space.propTypes = {

};
export default Space;
