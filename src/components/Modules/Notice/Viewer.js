import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from 'antd';
class Notice extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const {
			item,
			itemData,
		} = this.props;
		const {
			bg_color,
			title,
			color,
			m_tb
		} = itemData || {};
		let dStyle = {
			color: color ? color : "black",
			background: bg_color ? bg_color : "white",
			margin: `${m_tb}px 0`
		};
		return (
			<div className="v-se-modules _pe-none v-sem-notice" style={dStyle}>
				<div className="_flex" style={{ padding: 10 }}>
					<div className="_icon">
						<Icon type="sound" style={{ color: "#fc6b47" }}/>
						{
							// <i className="iconfont icon-notice" />
						}
					</div>
					<marquee 
						style={{ color: color, width: '100%' }}
					>{title}</marquee>
				</div>
			</div>
		);
	}
}
Notice.propTypes = {

};
export default Notice;
