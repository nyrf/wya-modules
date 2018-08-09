import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
class Tel extends PureComponent {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const {
			item,
			itemData
		} = this.props;
		const {
			tel,
			name,
			m_tb,
			color,
			bg_color
		} = itemData || {};
		let dStyle = {
			color: color ? color : "black",
			background: bg_color ? bg_color : "white",
			margin: `${m_tb}px 0`
		};
		let tStyle = {
			color: dStyle.color
		};
		return (
			<div className="wya-me-modules _pe-none wya-mem-tel" style={dStyle}>
				<Icon type="phone" style={{ padding: `0 8px`, ...tStyle }}/>
				<a href={'tel:' + tel} style={{ ...tStyle }}>{name} {tel}</a>
			</div>
		);
	}
}
Tel.propTypes = {

};
export default Tel;