import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
class Rtf extends PureComponent {
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
			rtf,
			m_tb 
		} = itemData || {};
		return (
			<div className="wya-me-modules _pe-none wya-mem-rtf g-antd-unset" style={{ margin: `${m_tb}px 0` }}>
				<div style={{ ...styleObj }} dangerouslySetInnerHTML={{ __html: rtf.html }} />
			</div>
		);
	}
}
Rtf.propTypes = {

};
export default Rtf;
