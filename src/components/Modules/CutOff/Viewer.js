import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
class Cutoff extends PureComponent {
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
			m_tb,
			color,
			style
		} = itemData || {};
		return (
			<div 
				className="wya-me-modules _pe-none wya-mem-cut-off" 
				style={{
					margin: `${m_tb}px 0`,
					borderTop: `${style} 1px ${color || 'red'}`,
					...styleObj
				}} 
			/>
		);
	}
}
Cutoff.propTypes = {

};
export default Cutoff;